define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_679',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 679');
    	$scope.test = TestService.getTest()
    }]);
});
