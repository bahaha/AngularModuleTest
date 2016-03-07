define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_263',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 263');
    	$scope.test = TestService.getTest()
    }]);
});
