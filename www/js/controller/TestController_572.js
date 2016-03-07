define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_572',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 572');
    	$scope.test = TestService.getTest()
    }]);
});
