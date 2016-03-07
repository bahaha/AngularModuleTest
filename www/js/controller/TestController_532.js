define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_532',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 532');
    	$scope.test = TestService.getTest()
    }]);
});
