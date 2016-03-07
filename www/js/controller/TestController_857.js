define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_857',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 857');
    	$scope.test = TestService.getTest()
    }]);
});
