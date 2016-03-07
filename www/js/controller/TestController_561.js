define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_561',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 561');
    	$scope.test = TestService.getTest()
    }]);
});
