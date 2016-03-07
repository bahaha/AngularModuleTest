define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_130',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 130');
    	$scope.test = TestService.getTest()
    }]);
});
