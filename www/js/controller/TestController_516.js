define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_516',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 516');
    	$scope.test = TestService.getTest()
    }]);
});
