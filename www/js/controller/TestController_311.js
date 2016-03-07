define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_311',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 311');
    	$scope.test = TestService.getTest()
    }]);
});
