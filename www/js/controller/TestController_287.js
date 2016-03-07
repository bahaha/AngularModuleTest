define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_287',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 287');
    	$scope.test = TestService.getTest()
    }]);
});
