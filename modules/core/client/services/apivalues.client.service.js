'use strict';


function ApiValuesObject(w) {

    this.clientData = w.clientData;

    this.apiBaseUrl = function() {
        return w.connectionProtocol + w.apiAddress +
           // ':' + w.apiPort + '/apiv' + w.apiVersion + '/';
            ':' + w.apiPort + '/api/';
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
angular.module('core').service('ApiValues', ['$window',
    function ($window) {
        return new ApiValuesObject($window);
    }
]);

angular.module('users').service('ApiValues', ['$window',
    function ($window) {
        return new ApiValuesObject($window);
    }
]);
