define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_751',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 751');
    	$scope.test = TestService.getTest()
    }]);
});
