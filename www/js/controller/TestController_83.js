define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_83',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 83');
    	$scope.test = TestService.getTest()
    }]);
});
