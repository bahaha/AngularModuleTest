define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_687',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 687');
    	$scope.test = TestService.getTest()
    }]);
});
