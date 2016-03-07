define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_639',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 639');
    	$scope.test = TestService.getTest()
    }]);
});
