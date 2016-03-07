define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_52',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 52');
    	$scope.test = TestService.getTest()
    }]);
});
