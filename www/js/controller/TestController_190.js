define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_190',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 190');
    	$scope.test = TestService.getTest()
    }]);
});
