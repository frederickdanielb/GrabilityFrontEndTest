'use strict';


/**
 * Controlador que gestiona los feed de la aplicacion
 *
 * @author Frederick Bustamante <frederickdanielb@gmail.com>
 * @version V1.0
 */
app.controller('feedCtrl', [
    '$scope', '$injector', 'feedModel', 'appConfig',
    function ($scope, $injector, feedModel, appConfig) {

        var _url = appConfig.getPathApi();
        $scope.data = [];
        $scope.selectedIndex = null;
        $scope.class_title = 'enter';
        $scope.top_title = '';
        $scope.feed_show = false;
        $scope.url_api_config = _url + 'data/news_mock.json';
        $scope.url_api_default = _url + 'data/news_mock.json';
        $scope.display = 'none';
        $scope.detail_app=appConfig;
        /**
         * Funcion para manejo de los feed hacia la vista
         * con respecto al boton burger.
         * @returns {array}
         */
        $scope.getFeed = function () {
            if ($scope.data.length > 0) {
                $scope.feed_show = false;
                $scope.data = [];

            } else {
                feedModel.getFeed($scope.url_api_config)
                    .then(function (res) {
                        $scope.data = res.data;
                    }, function (res) {
                        alert('No hay comunicación con el servidor');
                        $scope.display = 'none';

                    });


            }

        }

        /**
         * Funcion que permite mostrar la informacion detallada
         * de cada feed y el titulo del contenedor cabecera
         * @returns {event}
         */
        $scope.displayInfoFeed = function (index, title) {
            if (index == $scope.selectedIndex) {
                $scope.selectedIndex = null;
                $scope.class_title = 'out';
            } else {
                $scope.selectedIndex = index;
                $scope.top_title = title;
                $scope.class_title = 'enter';
            }
        }

    }
]);