define(['angular'], function (angular) {
	'use strict';
	
  /* Services */

  // Demonstrate how to register services
  // In this case it is a simple value service.
	angular.module('myTestApp.services', [])

        .value('version', '0.1')

        .factory('labAPIservice', function($http) {
            "use strict";

            var labAPI = {};

            labAPI.getJSON = function() {
                return $http({
                    method: 'JSONP',
                    url: 'http://api.openweathermap.org/data/2.5/weather?q=london,uk&callback=JSON_CALLBACK'
                });
            };

            return labAPI;
        });


});
