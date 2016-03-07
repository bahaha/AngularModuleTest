define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_655',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 655');
    	$scope.test = TestService.getTest()
    }]);
});
