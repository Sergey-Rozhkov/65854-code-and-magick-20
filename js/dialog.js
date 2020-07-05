'use strict';

window.dialog = (function () {
  var setupElement = document.querySelector('.setup');
  var setupOpenElement = document.querySelector('.setup-open');
  var setupCloseElement = document.querySelector('.setup-close');
  var setupUserNameElement = document.querySelector('.setup-user-name');

  var showSetupSimilar = function () {
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  showSetupSimilar();

  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape' && !setupUserNameElement.focused) {
      evt.preventDefault();
      closePopup();
    }
  };

  var setTagFocus = function (tagName) {
    tagName.focused = true;
  };

  var setTagBlur = function (tagName) {
    tagName.focused = false;
  };

  setupUserNameElement.addEventListener('focus', function () {
    setTagFocus(setupUserNameElement);
  });

  setupUserNameElement.addEventListener('blur', function () {
    setTagBlur(setupUserNameElement);
  });

  var openPopup = function () {
    setupElement.classList.remove('hidden');

    setupElement.style.top = window.constants.SETUP_DEFAULT_TOP;
    setupElement.style.left = window.constants.SETUP_DEFAULT_LEFT;

    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setupElement.classList.add('hidden');

    document.removeEventListener('keydown', onPopupEscPress);
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

  return {
    setupElement: setupElement
  };
})();
