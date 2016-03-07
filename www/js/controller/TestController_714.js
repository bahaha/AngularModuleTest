define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_714',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 714');
    	$scope.test = TestService.getTest()
    }]);
});
