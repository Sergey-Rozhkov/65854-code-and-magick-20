'use strict';

(function () {
  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, window.constants.CLOUD_WIDTH, window.constants.CLOUD_HEIGHT);
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, (window.constants.CLOUD_X + 10), (window.constants.CLOUD_Y + 10), 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, window.constants.CLOUD_X, window.constants.CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', 120, 30);
    ctx.fillText('Список результатов:', 120, 50);

    var maxTime = window.generalFunctions.getMaxElement(times);

    players.forEach(function (item, index) {
      ctx.fillStyle = '#000';
      ctx.fillText(item, window.constants.CLOUD_X + window.constants.GAP + ((window.constants.BAR_WIDTH + window.constants.BAR_GAP) * index), window.constants.CLOUD_Y + window.constants.CLOUD_HEIGHT - (window.constants.GAP / 2) - window.constants.FONT_GAP);

      ctx.fillStyle = item === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240deg,' + window.generalFunctions.getRandomNumberFromRange(10, 100) + '%, 50%)';
      ctx.fillRect(window.constants.CLOUD_X + window.constants.GAP + ((window.constants.BAR_WIDTH + window.constants.BAR_GAP) * index), window.constants.CLOUD_Y + window.constants.CLOUD_HEIGHT - window.constants.GAP - window.constants.FONT_GAP - ((window.constants.MAX_BAR_HEIGHT * times[index]) / maxTime), window.constants.BAR_WIDTH, (window.constants.MAX_BAR_HEIGHT * times[index]) / maxTime);

      ctx.fillStyle = '#000';
      ctx.fillText(Math.ceil(times[index]), window.constants.CLOUD_X + window.constants.GAP + ((window.constants.BAR_WIDTH + window.constants.BAR_GAP) * index), window.constants.CLOUD_Y + window.constants.CLOUD_HEIGHT - (window.constants.GAP * 2) - window.constants.FONT_GAP - ((window.constants.MAX_BAR_HEIGHT * times[index]) / maxTime));
    });
  };
})();
