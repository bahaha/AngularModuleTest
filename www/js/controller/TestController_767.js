define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_767',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 767');
    	$scope.test = TestService.getTest()
    }]);
});
