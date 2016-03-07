define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_272',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 272');
    	$scope.test = TestService.getTest()
    }]);
});
