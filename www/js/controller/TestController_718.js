define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_718',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 718');
    	$scope.test = TestService.getTest()
    }]);
});
