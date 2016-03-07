define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_521',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 521');
    	$scope.test = TestService.getTest()
    }]);
});
