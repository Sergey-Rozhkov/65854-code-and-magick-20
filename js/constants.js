'use strict';

window.constants = (function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 20;
  var FONT_GAP = 15;
  var MAX_BAR_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var BAR_GAP = 50;
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_AMOUNTS = 4;
  var SETUP_FORM_ACTION = 'https://javascript.pages.academy/code-and-magick';
  var SETUP_DEFAULT_TOP = '80px';
  var SETUP_DEFAULT_LEFT = '50%';

  return {
    CLOUD_WIDTH: CLOUD_WIDTH,
    CLOUD_HEIGHT: CLOUD_HEIGHT,
    CLOUD_X: CLOUD_X,
    CLOUD_Y: CLOUD_Y,
    GAP: GAP,
    FONT_GAP: FONT_GAP,
    MAX_BAR_HEIGHT: MAX_BAR_HEIGHT,
    BAR_WIDTH: BAR_WIDTH,
    BAR_GAP: BAR_GAP,
    WIZARD_NAMES: WIZARD_NAMES,
    WIZARD_SURNAMES: WIZARD_SURNAMES,
    WIZARD_COAT_COLORS: WIZARD_COAT_COLORS,
    WIZARD_EYES_COLORS: WIZARD_EYES_COLORS,
    WIZARD_FIREBALL_COLORS: WIZARD_FIREBALL_COLORS,
    WIZARD_AMOUNTS: WIZARD_AMOUNTS,
    SETUP_FORM_ACTION: SETUP_FORM_ACTION,
    SETUP_DEFAULT_TOP: SETUP_DEFAULT_TOP,
    SETUP_DEFAULT_LEFT: SETUP_DEFAULT_LEFT
  };
})();
