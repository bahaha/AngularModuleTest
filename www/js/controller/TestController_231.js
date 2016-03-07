define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_231',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 231');
    	$scope.test = TestService.getTest()
    }]);
});
