'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_AMOUNTS = 4;
var SETUP_FORM_ACTION = 'https://javascript.pages.academy/code-and-magick';

var setupElement = document.querySelector('.setup');
var setupOpenElement = document.querySelector('.setup-open');
var setupCloseElement = document.querySelector('.setup-close');
var setupUserNameElement = document.querySelector('.setup-user-name');
var setupWizardFormElement = document.querySelector('.setup-wizard-form');
var setupSubmitElement = document.querySelector('.setup-submit');
var wizardCoatElement = document.querySelector('.setup-wizard .wizard-coat');
var wizardInputCoatElement = document.querySelector('.setup-wizard-appearance input[name="coat-color"]');
var wizardEyesElement = document.querySelector('.setup-wizard .wizard-eyes');
var wizardInputEyesElement = document.querySelector('.setup-wizard-appearance input[name="eyes-color"]');
var wizardFireballElement = document.querySelector('.setup-fireball-wrap');
var wizardInputFireballElement = wizardFireballElement.querySelector('input[name="fireball-color"]');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && !setupUserNameElement.focused) {
    evt.preventDefault();
    closePopup();
  }
};

var getTagFocus = function (tagName) {
  tagName.focused = true;
};

var getTagBlur = function (tagName) {
  tagName.focused = false;
};

setupUserNameElement.addEventListener('focus', function () {
  getTagFocus(setupUserNameElement);
});

setupUserNameElement.addEventListener('blur', function () {
  getTagBlur(setupUserNameElement);
});

var openPopup = function () {
  setupElement.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setupElement.classList.add('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

setupOpenElement.addEventListener('click', function () {
  openPopup();
});

setupOpenElement.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupCloseElement.addEventListener('click', function () {
  closePopup();
});

setupCloseElement.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

setupSubmitElement.addEventListener('click', function () {
  setupWizardFormElement.setAttribute('action', SETUP_FORM_ACTION);
});

wizardCoatElement.addEventListener('click', function () {
  var wizardNewColorCoat = getRandomIndexArray(WIZARD_COAT_COLORS);

  wizardCoatElement.style.fill = wizardNewColorCoat;
  wizardInputCoatElement.value = wizardNewColorCoat;
});

wizardEyesElement.addEventListener('click', function () {
  var wizardNewColorEyes = getRandomIndexArray(WIZARD_EYES_COLORS);

  wizardEyesElement.style.fill = wizardNewColorEyes;
  wizardInputEyesElement.value = wizardNewColorEyes;
});

wizardFireballElement.addEventListener('click', function () {
  var wizardNewColorFireball = getRandomIndexArray(WIZARD_FIREBALL_COLORS);

  wizardFireballElement.style.backgroundColor = wizardNewColorFireball;
  wizardInputFireballElement.value = wizardNewColorFireball;
});

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplateElement = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var getRandomIndexArray = function (arr) {
  var min = 0;
  var max = arr.length - 1;
  var result = Math.round(Math.random() * (max - min) + min);
  return arr[result];
};

var wizards = [];

for (var i = 0; i < WIZARD_AMOUNTS; i++) {
  var wizard = {
    name: getRandomIndexArray(WIZARD_NAMES) + ' ' + getRandomIndexArray(WIZARD_SURNAMES),
    coatColor: getRandomIndexArray(WIZARD_COAT_COLORS),
    eyesColor: getRandomIndexArray(WIZARD_EYES_COLORS)
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

var fragment = document.createDocumentFragment();
for (var j = 0; j < WIZARD_AMOUNTS; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
