define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_164',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 164');
    	$scope.test = TestService.getTest()
    }]);
});
