define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_876',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 876');
    	$scope.test = TestService.getTest()
    }]);
});
