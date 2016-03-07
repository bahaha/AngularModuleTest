define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_313',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 313');
    	$scope.test = TestService.getTest()
    }]);
});
