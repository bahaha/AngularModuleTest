define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_821',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 821');
    	$scope.test = TestService.getTest()
    }]);
});
