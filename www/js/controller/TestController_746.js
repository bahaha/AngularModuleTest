define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_746',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 746');
    	$scope.test = TestService.getTest()
    }]);
});
