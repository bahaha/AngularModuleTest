define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_961',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 961');
    	$scope.test = TestService.getTest()
    }]);
});
