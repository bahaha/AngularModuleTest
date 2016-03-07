define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_159',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 159');
    	$scope.test = TestService.getTest()
    }]);
});
