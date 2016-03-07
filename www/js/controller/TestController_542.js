define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_542',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 542');
    	$scope.test = TestService.getTest()
    }]);
});
