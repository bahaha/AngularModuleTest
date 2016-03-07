define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_555',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 555');
    	$scope.test = TestService.getTest()
    }]);
});
