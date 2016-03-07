define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_785',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 785');
    	$scope.test = TestService.getTest()
    }]);
});
