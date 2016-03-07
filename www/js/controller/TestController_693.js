define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_693',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 693');
    	$scope.test = TestService.getTest()
    }]);
});
