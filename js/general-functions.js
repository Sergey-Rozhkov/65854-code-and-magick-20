'use strict';

window.generalFunctions = (function () {
  return {
    getMaxElement: function (arr) {
      var maxElement = arr[0];

      arr.forEach(function (item) {
        if (item > maxElement) {
          maxElement = item;
        }
      });

      return maxElement;
    },

    getRandomNumberFromRange: function (min, max) {
      return Math.ceil(Math.random() * (max - min) + min);
    },

    getRandomIndexArray: function (arr) {
      var min = 0;
      var max = arr.length - 1;
      var result = Math.round(Math.random() * (max - min) + min);

      return arr[result];
    }
  };
})();
