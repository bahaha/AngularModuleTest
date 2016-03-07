define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_438',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 438');
    	$scope.test = TestService.getTest()
    }]);
});
