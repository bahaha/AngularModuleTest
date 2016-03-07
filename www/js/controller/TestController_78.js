define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_78',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 78');
    	$scope.test = TestService.getTest()
    }]);
});
