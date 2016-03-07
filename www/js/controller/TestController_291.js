define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_291',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 291');
    	$scope.test = TestService.getTest()
    }]);
});
