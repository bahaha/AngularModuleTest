define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_759',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 759');
    	$scope.test = TestService.getTest()
    }]);
});
