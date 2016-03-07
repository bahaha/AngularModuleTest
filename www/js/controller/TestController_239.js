define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_239',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 239');
    	$scope.test = TestService.getTest()
    }]);
});
