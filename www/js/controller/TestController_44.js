define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_44',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 44');
    	$scope.test = TestService.getTest()
    }]);
});
