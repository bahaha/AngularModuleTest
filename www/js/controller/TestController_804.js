define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_804',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 804');
    	$scope.test = TestService.getTest()
    }]);
});
