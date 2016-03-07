define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_902',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 902');
    	$scope.test = TestService.getTest()
    }]);
});
