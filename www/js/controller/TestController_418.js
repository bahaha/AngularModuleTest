define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_418',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 418');
    	$scope.test = TestService.getTest()
    }]);
});
