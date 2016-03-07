define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_405',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 405');
    	$scope.test = TestService.getTest()
    }]);
});
