define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_139',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 139');
    	$scope.test = TestService.getTest()
    }]);
});
