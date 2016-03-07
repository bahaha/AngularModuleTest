define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_421',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 421');
    	$scope.test = TestService.getTest()
    }]);
});
