define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_246',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 246');
    	$scope.test = TestService.getTest()
    }]);
});
