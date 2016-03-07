define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_59',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 59');
    	$scope.test = TestService.getTest()
    }]);
});
