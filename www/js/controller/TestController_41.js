define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_41',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 41');
    	$scope.test = TestService.getTest()
    }]);
});
