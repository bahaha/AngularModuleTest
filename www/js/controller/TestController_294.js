define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_294',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 294');
    	$scope.test = TestService.getTest()
    }]);
});
