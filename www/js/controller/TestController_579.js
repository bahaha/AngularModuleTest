define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_579',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 579');
    	$scope.test = TestService.getTest()
    }]);
});
