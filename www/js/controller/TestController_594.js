define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_594',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 594');
    	$scope.test = TestService.getTest()
    }]);
});
