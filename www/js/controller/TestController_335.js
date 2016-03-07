define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_335',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 335');
    	$scope.test = TestService.getTest()
    }]);
});
