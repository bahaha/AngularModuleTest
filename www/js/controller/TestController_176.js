define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_176',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 176');
    	$scope.test = TestService.getTest()
    }]);
});
