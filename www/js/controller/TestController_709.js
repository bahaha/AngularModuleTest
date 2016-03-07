define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_709',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 709');
    	$scope.test = TestService.getTest()
    }]);
});
