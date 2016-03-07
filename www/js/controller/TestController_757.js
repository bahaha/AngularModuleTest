define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_757',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 757');
    	$scope.test = TestService.getTest()
    }]);
});
