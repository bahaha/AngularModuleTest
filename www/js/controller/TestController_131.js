define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_131',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 131');
    	$scope.test = TestService.getTest()
    }]);
});
