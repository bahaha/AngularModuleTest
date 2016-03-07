define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_779',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 779');
    	$scope.test = TestService.getTest()
    }]);
});
