define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_848',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 848');
    	$scope.test = TestService.getTest()
    }]);
});
