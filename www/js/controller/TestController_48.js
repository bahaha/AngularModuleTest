define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_48',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 48');
    	$scope.test = TestService.getTest()
    }]);
});
