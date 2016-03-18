'use strict';

var app = angular.module(
    "app", [
        "ngAnimate",
        "ui.router",
        'angularLazyImg',
    ]).config(["$injector", function ($injector) {
        var $stateProvider = $injector.get('$stateProvider', 'route');
        var $urlRouterProvider = $injector.get('$urlRouterProvider', 'route');
        var $httpProvider = $injector.get('$httpProvider', 'route');
        var lazyImgConfigProvider = $injector.get('lazyImgConfigProvider', 'route');
        //var scrollable = document.querySelector('#scrollable');
        lazyImgConfigProvider.setOptions({
            offset: 100, // how early you want to load image (default = 100)
            errorClass: 'error', // in case of loading image failure what class should be added (default = null)
            successClass: 'success', // in case of loading image success what class should be added (default = null)
            onError: function (image) {
            }, // function fired on loading error
            onSuccess: function (image) {
            } // function fired on loading success
            //container: angular.element(scrollable) // if scrollable container is not $window then provide it here
        });
        $urlRouterProvider.otherwise('/feed');
        $httpProvider.interceptors.push('requestInterceptor');
        $stateProvider
            .state("feed", {
                url: "/feed",
                templateUrl: "modules/feed/views/feed.html",
                controller: "feedCtrl"
            })
    }]);

app.constant('CONSTANTES', {
    VERSION: '1.0'
});