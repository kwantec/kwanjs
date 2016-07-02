'use strict';

//Menu service used for managing  menus
angular.module('core').service('ClientData', [ '$window',
  function ($window) {




    var clientData = $window.clientData;

    clientData.apiBaseUrl = function()
    {
      return clientData.connectionProtocol + clientData.apiAddress + ':' + clientData.apiPort + '/api/';
          // ':' + w.apiPort + '/apiv' + w.apiVersion + '/';

    };


    clientData.baseImageUrl = function()
    {
      return clientData.connectionProtocol + clientData.apiAddress + ':' + clientData.apiPort;

    };

    clientData.serverAddress = function()
    {
      return clientData.connectionProtocol + clientData.apiAddress + ':' + clientData.apiPort;

    };


    clientData.sayHi = function()
    {
      return 'Hi it works on protocol ' + clientData.connectionProtocol;
    };


    return clientData;

  }
]);
