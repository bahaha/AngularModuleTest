define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_104',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 104');
    	$scope.test = TestService.getTest()
    }]);
});
