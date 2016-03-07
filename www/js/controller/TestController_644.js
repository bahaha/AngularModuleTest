define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_644',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 644');
    	$scope.test = TestService.getTest()
    }]);
});
