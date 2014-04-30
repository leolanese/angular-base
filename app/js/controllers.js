define(['angular', 'services'], function (angular) {
	'use strict';

	/* Controllers */
	
	return angular.module('myTestApp.controllers', ['myTestApp.services'])


        .controller('titleCtrl',['$scope', function ($scope) {

            $scope.t0 = "Test - Leo Lanese";
            // include BOLD content style?

        }])

        .controller('startController', ['$scope', 'labAPIservice', function($scope, labAPIservice) {
            // Each place where controller is applied has different scope.
            $scope.nameFilter = null;
            $scope.startList = [];

            // multiple @fonts loader
            WebFont.load({
                google: {
                    families: ['Droid Sans', 'Droid Serif']
                }
            });

            labAPIservice.getJSON($scope.id).success(function (response) {

                // Digging into the response to get the relevant JSON data
                $scope.startList = response;

                // assigning a unicque value
                $scope.driver = response.name;

                console.log("$scope.startList", $scope.startList);
                console.log(response);
                console.log(response.name);
                console.log(response.coord.lat,response.coord.lon);
                console.log(response.weather[0].description);
                console.log(response.weather[0].icon);
                console.log(response.main.temp, response.main.temp_min, response.main.temp_max);
                console.log(response.main.pressure);
                console.log(response.main.humidity);

            });

        }])



        .controller('cityController'['$scope', function($scope, $routeParams, labAPIservice) {
            $scope.id = $routeParams.id;

            labAPIservice.getJSON($scope.id).success(function (response) {
                $scope.startList = response;

                console.log("$scope.startList", $scope.startList);

            });

        }])







        .controller('MyCtrl1', ['$scope', function($scope) {

            $scope.t1 = "This is the partial for view 1";



        }])



        .controller('MyCtrl2', ['$scope', function($scope) {

            $scope.t2 = "This is the partial for view 2";

        }])

        .controller('MyCtrl3', ['$scope', function($scope) {
            $scope.t2 = "This is the partial for view 3";


        }])


        // handling the JSONP
        .controller('JSONCtrl',['$scope', function ($scope, labAPIservice) {

            $scope.t0 = "Test - Leo Lanese";
            // include BOLD content style?


        }])




		.controller('MyCtrl1', ['$scope', 'version', function ($scope, version) {
			$scope.scopedAppVersion = version;
		}])

		// More involved example where controller is required from an external file
		.controller('MyCtrl2', ['$scope', '$injector', function($scope, $injector) {
			require(['controllers/myctrl2'], function(myctrl2) {
				// injector method takes an array of modules as the first argument
				// if you want your controller to be able to use components from
				// any of your other modules, make sure you include it together with 'ng'
				// Furthermore we need to pass on the $scope as it's unique to this controller
				$injector.invoke(myctrl2, this, {'$scope': $scope});
			});
		}]);

});