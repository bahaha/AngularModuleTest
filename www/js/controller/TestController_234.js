define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_234',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 234');
    	$scope.test = TestService.getTest()
    }]);
});
