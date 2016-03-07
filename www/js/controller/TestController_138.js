define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_138',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 138');
    	$scope.test = TestService.getTest()
    }]);
});
