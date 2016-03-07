define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_812',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 812');
    	$scope.test = TestService.getTest()
    }]);
});
