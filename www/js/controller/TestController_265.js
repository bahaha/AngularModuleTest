define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_265',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 265');
    	$scope.test = TestService.getTest()
    }]);
});
