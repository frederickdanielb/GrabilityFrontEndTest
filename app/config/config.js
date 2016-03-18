/**
 * El archivo contiene el base url correspondiente al servidor que se van a consumir la información
 *
 * @author Frederick Bustamante <frederickdanielb@gmail.com>
 * @since Version 1.0
 * @package Grability FrontEnd Test
 *
 */
app.factory("appConfig", ['$location', function ($location) {
    /**
     * Parámetro para colocar la url con segura, por defecto es no segura
     * @type {boolean}
     */
    var secure = false;

    /**
     * Dominio al cual se realizaran las peticiones a la api
     * @type {string}
     */
    var domain = $location.host()+ '/GrabilityFrontEndTest';


    /**
     * Url donde se encuentran los servicios que va a consumir la aplicación
     * @type {string}
     */
    var pathApi = domain + '/api';


    /**
     * Objeto publico de configuración
     * @type {{getPathApi: Function,appName: string, appDescription: string}}
     */
    var config = {
        /**
         * Función para configurar la rutas del sitio y las api.
         * @returns {string}
         */
        getPathApi: function () {
            var http = 'http://';
            if (secure) {
                http = 'https://';
            }
            if (pathApi.substring(pathApi.length - 1, pathApi.length) != '/') {
                pathApi += '/';
            }
            return http + pathApi;
        },

        /**
         * Nombre de la aplicación
         */
        appName: 'Feed de Noticias',

        /**
         * Descripción base de la aplicación
         */
        appDescription: 'Prueba FrontEnd para Grability de feed de noticias desarrollada en Angular.Js',
        /**
         * Autor de la aplicación
         */
        appAuthor: 'Frederick Bustamante',
        /**
         * Autor de la aplicación
         */
         appAuthorEmail: 'frederickdanielb@gmail.com',
        /**
         * App Repositorio
         */
        appRepo: 'frederickdanielb@gmail.com'
    };

    return config;
}]);