define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_535',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 535');
    	$scope.test = TestService.getTest()
    }]);
});
