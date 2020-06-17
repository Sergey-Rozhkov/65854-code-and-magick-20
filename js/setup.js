'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_AMOUNTS = 4;

var userDialogElement = document.querySelector('.setup');
userDialogElement.classList.remove('hidden');

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
