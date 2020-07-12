'use strict';

window.backend = (function () {
  var StatusCode = {
    OK: 200
  };

  var save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText, '.setup-footer', 'beforebegin');
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения', '.setup-footer', 'beforebegin');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс', '.setup-footer', 'beforebegin');
    });

    xhr.timeout = window.constants.TIMEOUT_IN_MS;

    xhr.open('POST', window.constants.URL_SAVE);
    xhr.send(data);
  };

  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText, '.setup-similar-list', 'beforebegin');
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения', '.setup-similar-list', 'beforebegin');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс', '.setup-similar-list', 'beforebegin');
    });

    xhr.timeout = window.constants.TIMEOUT_IN_MS;

    xhr.open('GET', window.constants.URL_LOAD);

    xhr.send();
  };

  return {
    save: save,
    load: load
  };
})();
