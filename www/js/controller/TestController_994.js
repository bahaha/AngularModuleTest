define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_994',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 994');
    	$scope.test = TestService.getTest()
    }]);
});
