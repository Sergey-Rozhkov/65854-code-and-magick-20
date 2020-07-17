'use strict';

window.renderWizards = (function () {

  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplateElement = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

  var renderWizard = function (item) {
    var wizardElement = similarWizardTemplateElement.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = item.name;
    wizardElement.querySelector('.wizard-coat').style.fill = item.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = item.colorEyes;

    return wizardElement;
  };

  var renderWizards = function (data) {
    var fragment = document.createDocumentFragment();
    var quantityWizards = data.length > window.constants.MAX_SIMILAR_WIZARD_COUNT ? window.constants.MAX_SIMILAR_WIZARD_COUNT : data.length;
    similarListElement.innerHTML = '';
    for (var j = 0; j < quantityWizards; j++) {
      fragment.appendChild(renderWizard(data[j]));
    }
    similarListElement.appendChild(fragment);

    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  var successWorkHandler = function (list) {
    window.similarWizards.wizards = list;
    window.similarWizards.updateWizards(window.similarWizards.wizards, window.similarWizards.coatColor, window.similarWizards.eyesColor);
  };

  window.backend.load(successWorkHandler, window.generalFunctions.errorWorkHandler);

  return {
    renderWizards: renderWizards,
    successWorkHandler: successWorkHandler
  };
})();
