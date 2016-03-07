define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_204',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 204');
    	$scope.test = TestService.getTest()
    }]);
});
