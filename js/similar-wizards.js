'use strict';

window.similarWizards = (function () {
  var coatColor = 'rgb(101, 137, 164)';
  var eyesColor = 'black';
  var wizards = [];

  var getRank = function (wizard, coat, eyes) {
    var rank = 0;

    if (wizard.colorCoat === coat) {
      rank += 2;
    }
    if (wizard.colorEyes === eyes) {
      rank += 1;
    }

    return rank;
  };

  var namesComparison = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function (magicians, coat, eyes) {
    window.renderWizards.renderWizards(magicians.sort(function (left, right) {
      var rankDiff = getRank(right, coat, eyes) - getRank(left, coat, eyes);
      if (rankDiff === 0) {
        rankDiff = namesComparison(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  return {
    updateWizards: updateWizards,
    coatColor: coatColor,
    eyesColor: eyesColor,
    wizards: wizards,
  };

})();
