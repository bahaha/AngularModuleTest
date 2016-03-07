define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_435',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 435');
    	$scope.test = TestService.getTest()
    }]);
});
