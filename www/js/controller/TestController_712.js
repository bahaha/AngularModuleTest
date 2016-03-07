define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_712',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 712');
    	$scope.test = TestService.getTest()
    }]);
});
