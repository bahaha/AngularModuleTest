define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_186',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 186');
    	$scope.test = TestService.getTest()
    }]);
});
