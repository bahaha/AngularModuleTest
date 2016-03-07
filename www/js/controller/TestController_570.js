define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_570',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 570');
    	$scope.test = TestService.getTest()
    }]);
});
