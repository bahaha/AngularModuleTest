define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_862',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 862');
    	$scope.test = TestService.getTest()
    }]);
});
