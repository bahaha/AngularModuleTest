define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_255',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 255');
    	$scope.test = TestService.getTest()
    }]);
});
