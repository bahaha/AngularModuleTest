define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_458',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 458');
    	$scope.test = TestService.getTest()
    }]);
});
