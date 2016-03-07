define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_603',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 603');
    	$scope.test = TestService.getTest()
    }]);
});
