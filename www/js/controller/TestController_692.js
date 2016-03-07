define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_692',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 692');
    	$scope.test = TestService.getTest()
    }]);
});
