define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_651',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 651');
    	$scope.test = TestService.getTest()
    }]);
});
