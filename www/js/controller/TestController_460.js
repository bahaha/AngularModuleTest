define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_460',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 460');
    	$scope.test = TestService.getTest()
    }]);
});
