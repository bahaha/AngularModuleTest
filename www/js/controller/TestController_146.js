define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_146',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 146');
    	$scope.test = TestService.getTest()
    }]);
});
