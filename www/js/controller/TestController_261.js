define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_261',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 261');
    	$scope.test = TestService.getTest()
    }]);
});
