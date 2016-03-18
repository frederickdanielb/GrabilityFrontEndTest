'use strict';
/**
 * Servicio para manejo de los feed
 *
 * @author Frederick Bustamante <frederickdanielb@gmail.com>
 * @version V1.0
 */
app.factory('feedModel', [
    "$http", "appConfig",
    function ($http, appConfig) {
        var _url = appConfig.getPathApi();

        return {
            /**
             * Consume los datos del servidor para la data de los feed
             * @param credentials
             * @return {*}
             *
             * @author Frederick Bustamante <frederickdanielb@gmail.com>
             */

            getFeed: function (url) {
                var _thisUrl = _url + 'data/news_mock.json';
                if (url != null && url != '') {
                    _thisUrl = url;
                }
                return $http.get(_thisUrl);
            }
        };

    }]);