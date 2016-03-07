define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_637',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 637');
    	$scope.test = TestService.getTest()
    }]);
});
