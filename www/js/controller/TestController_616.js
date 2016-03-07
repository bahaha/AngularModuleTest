define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_616',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 616');
    	$scope.test = TestService.getTest()
    }]);
});
