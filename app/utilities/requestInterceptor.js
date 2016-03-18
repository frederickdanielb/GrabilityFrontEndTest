'use strict';
/**
 * Permite mostrar un mensaje de carga mientras se ejecuta una peticion http
 *
 * @author Frederick Bustamante <frederickdanielb@gmail.com>
 * @version V1.0
 */
app.factory('requestInterceptor', ['$q', '$rootScope', '$location', function ($q, $rootScope, $location) {
    $rootScope.pendingRequests = 0;

    var showLoading = function (show) {
        if (show)
            angular.element('#loading').show();
    };

    var hideLoading = function () {
        angular.element('#loading').hide();
    };
    var requestInterceptor = {
        'request': function (config) {
            config.headers = config.headers || {};
            var show_notification = true;
            if ($rootScope.pendingRequests == 0) {
                if (angular.isDefined(config.cargando) && !config.cargando) {
                    show_notification = false;
                }
                showLoading(show_notification);
            }
            $rootScope.pendingRequests++;

            return config || $q.when(config);
        },

        'requestError': function (rejection) {
            $rootScope.pendingRequests--;
            if ($rootScope.pendingRequests == 0) {
                hideLoading();
            }

            return $q.reject(rejection);
        },

        'response': function (response) {
            $rootScope.pendingRequests--;
            if ($rootScope.pendingRequests == 0) {
                hideLoading();
            }


            return response || $q.when(response);
        },

        'responseError': function (rejection) {
            $rootScope.pendingRequests--;

            if ($rootScope.pendingRequests == 0) {
                hideLoading();
            }

            return $q.reject(rejection);
        }
    }
    return requestInterceptor;
}]);