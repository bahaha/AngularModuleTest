define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_331',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 331');
    	$scope.test = TestService.getTest()
    }]);
});
