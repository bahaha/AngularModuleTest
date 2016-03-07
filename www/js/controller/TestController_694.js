define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_694',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 694');
    	$scope.test = TestService.getTest()
    }]);
});
