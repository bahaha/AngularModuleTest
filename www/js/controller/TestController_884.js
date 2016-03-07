define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_884',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 884');
    	$scope.test = TestService.getTest()
    }]);
});
