define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_282',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 282');
    	$scope.test = TestService.getTest()
    }]);
});
