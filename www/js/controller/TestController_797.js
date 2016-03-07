define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_797',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 797');
    	$scope.test = TestService.getTest()
    }]);
});
