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
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_AMOUNTS = 4;
  var SETUP_DEFAULT_TOP = '80px';
  var SETUP_DEFAULT_LEFT = '50%';
  var MAX_SIMILAR_WIZARD_COUNT = 4;
  var URL_SAVE = 'https://javascript.pages.academy/code-and-magick';
  var URL_LOAD = 'https://javascript.pages.academy/code-and-magick/data';
  var TIMEOUT_IN_MS = 10000;

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
    WIZARD_EYES_COLORS: WIZARD_EYES_COLORS,
    WIZARD_FIREBALL_COLORS: WIZARD_FIREBALL_COLORS,
    WIZARD_AMOUNTS: WIZARD_AMOUNTS,
    SETUP_DEFAULT_TOP: SETUP_DEFAULT_TOP,
    SETUP_DEFAULT_LEFT: SETUP_DEFAULT_LEFT,
    MAX_SIMILAR_WIZARD_COUNT: MAX_SIMILAR_WIZARD_COUNT,
    URL_SAVE: URL_SAVE,
    URL_LOAD: URL_LOAD,
    TIMEOUT_IN_MS: TIMEOUT_IN_MS
  };
})();
