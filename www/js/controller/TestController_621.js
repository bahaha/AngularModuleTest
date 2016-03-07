define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_621',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 621');
    	$scope.test = TestService.getTest()
    }]);
});
