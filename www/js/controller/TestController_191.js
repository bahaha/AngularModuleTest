define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_191',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 191');
    	$scope.test = TestService.getTest()
    }]);
});
