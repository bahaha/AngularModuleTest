define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_217',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 217');
    	$scope.test = TestService.getTest()
    }]);
});
