define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_822',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 822');
    	$scope.test = TestService.getTest()
    }]);
});
