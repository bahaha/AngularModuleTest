define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_728',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 728');
    	$scope.test = TestService.getTest()
    }]);
});
