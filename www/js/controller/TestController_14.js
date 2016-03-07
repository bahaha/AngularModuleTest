define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_14',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 14');
    	$scope.test = TestService.getTest()
    }]);
});
