'use strict';

(function () {
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

  var successHandler = function (list) {
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < window.constants.MAX_SIMILAR_WIZARD_COUNT; j++) {
      fragment.appendChild(renderWizard(list[j]));
    }
    similarListElement.appendChild(fragment);

    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.backend.load(successHandler, window.generalFunctions.errorHandler);
})();
