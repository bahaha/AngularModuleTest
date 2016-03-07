define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_351',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 351');
    	$scope.test = TestService.getTest()
    }]);
});
