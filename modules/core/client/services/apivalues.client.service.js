'use strict';


function ApiValuesObject(w) {

    this.clientData = w.clientData;

    this.apiBaseUrl = function() {
        return w.connectionProtocol + w.apiAddress +
            ':' + w.apiPort + '/apiv' + w.apiVersion + '/';
    };

    this.baseImageUrl = function(){
        return w.connectionProtocol + w.apiAddress +
            ':' + w.apiPort;
    };

    this.serverAddress = function(){
        return w.connectionProtocol + w.apiAddress +
            ':' + w.apiPort;
    };
}

// Authentication service for user variables
angular.module('main').service('ApiValues', ['$window',
    function ($window) {
        return new ApiValuesObject($window);
    }
]);
