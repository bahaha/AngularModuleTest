define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_46',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 46');
    	$scope.test = TestService.getTest()
    }]);
});
