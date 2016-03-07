define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_554',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 554');
    	$scope.test = TestService.getTest()
    }]);
});
