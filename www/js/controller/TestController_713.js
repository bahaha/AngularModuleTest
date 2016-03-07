define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_713',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 713');
    	$scope.test = TestService.getTest()
    }]);
});
