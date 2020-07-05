'use strict';

(function () {
  var dialogHandleElement = document.querySelector('.upload');

  dialogHandleElement.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.dialog.setupElement.style.top = (window.dialog.setupElement.offsetTop - shift.y) + 'px';
      window.dialog.setupElement.style.left = (window.dialog.setupElement.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandleElement.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandleElement.addEventListener('click', onClickPreventDefault);
      }
    };

    if (evt.button === 0) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }
  });
})();
