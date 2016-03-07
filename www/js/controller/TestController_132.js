define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_132',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 132');
    	$scope.test = TestService.getTest()
    }]);
});
