define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_656',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 656');
    	$scope.test = TestService.getTest()
    }]);
});
