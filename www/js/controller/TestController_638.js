define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_638',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 638');
    	$scope.test = TestService.getTest()
    }]);
});
