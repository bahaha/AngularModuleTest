define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_771',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 771');
    	$scope.test = TestService.getTest()
    }]);
});
