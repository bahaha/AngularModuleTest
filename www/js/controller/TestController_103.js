define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_103',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 103');
    	$scope.test = TestService.getTest()
    }]);
});
