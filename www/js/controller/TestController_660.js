define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_660',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 660');
    	$scope.test = TestService.getTest()
    }]);
});
