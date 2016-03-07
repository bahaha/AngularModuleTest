define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_735',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 735');
    	$scope.test = TestService.getTest()
    }]);
});
