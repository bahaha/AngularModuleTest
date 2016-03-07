define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_881',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 881');
    	$scope.test = TestService.getTest()
    }]);
});
