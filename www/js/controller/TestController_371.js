define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_371',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 371');
    	$scope.test = TestService.getTest()
    }]);
});
