'use strict';

(function () {
  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplateElement = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var wizards = [];

  for (var i = 0; i < window.constants.WIZARD_AMOUNTS; i++) {
    var wizard = {
      name: window.generalFunctions.getRandomIndexArray(window.constants.WIZARD_NAMES) + ' ' + window.generalFunctions.getRandomIndexArray(window.constants.WIZARD_SURNAMES),
      coatColor: window.generalFunctions.getRandomIndexArray(window.constants.WIZARD_COAT_COLORS),
      eyesColor: window.generalFunctions.getRandomIndexArray(window.constants.WIZARD_EYES_COLORS)
    };
    wizards.push(wizard);
  }

  var renderWizard = function (item) {
    var wizardElement = similarWizardTemplateElement.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = item.name;
    wizardElement.querySelector('.wizard-coat').style.fill = item.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = item.eyesColor;

    return wizardElement;
  };

  var renderWizards = function () {
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < window.constants.WIZARD_AMOUNTS; j++) {
      fragment.appendChild(renderWizard(wizards[j]));
    }
    similarListElement.appendChild(fragment);
  };

  renderWizards();
})();
