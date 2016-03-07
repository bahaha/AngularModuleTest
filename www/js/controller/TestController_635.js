define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_635',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 635');
    	$scope.test = TestService.getTest()
    }]);
});
