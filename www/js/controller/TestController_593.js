define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_593',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 593');
    	$scope.test = TestService.getTest()
    }]);
});
