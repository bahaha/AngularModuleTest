define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_518',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 518');
    	$scope.test = TestService.getTest()
    }]);
});
