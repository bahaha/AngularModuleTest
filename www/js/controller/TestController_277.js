define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_277',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 277');
    	$scope.test = TestService.getTest()
    }]);
});
