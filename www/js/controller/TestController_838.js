define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_838',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 838');
    	$scope.test = TestService.getTest()
    }]);
});
