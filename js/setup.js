'use strict';

(function () {
  var setupWizardFormElement = document.querySelector('.setup-wizard-form');
  var setupSubmitElement = document.querySelector('.setup-submit');
  var wizardCoatElement = document.querySelector('.setup-wizard .wizard-coat');
  var wizardInputCoatElement = document.querySelector('.setup-wizard-appearance input[name="coat-color"]');
  var wizardEyesElement = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardInputEyesElement = document.querySelector('.setup-wizard-appearance input[name="eyes-color"]');
  var wizardFireballElement = document.querySelector('.setup-fireball-wrap');
  var wizardInputFireballElement = wizardFireballElement.querySelector('input[name="fireball-color"]');

  setupSubmitElement.addEventListener('click', function () {
    setupWizardFormElement.setAttribute('action', window.constants.SETUP_FORM_ACTION);
  });

  wizardCoatElement.addEventListener('click', function () {
    var wizardNewColorCoat = window.generalFunctions.getRandomIndexArray(window.constants.WIZARD_COAT_COLORS);

    wizardCoatElement.style.fill = wizardNewColorCoat;
    wizardInputCoatElement.value = wizardNewColorCoat;
  });

  wizardEyesElement.addEventListener('click', function () {
    var wizardNewColorEyes = window.generalFunctions.getRandomIndexArray(window.constants.WIZARD_EYES_COLORS);

    wizardEyesElement.style.fill = wizardNewColorEyes;
    wizardInputEyesElement.value = wizardNewColorEyes;
  });

  wizardFireballElement.addEventListener('click', function () {
    var wizardNewColorFireball = window.generalFunctions.getRandomIndexArray(window.constants.WIZARD_FIREBALL_COLORS);

    wizardFireballElement.style.backgroundColor = wizardNewColorFireball;
    wizardInputFireballElement.value = wizardNewColorFireball;
  });
})();
