define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_390',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 390');
    	$scope.test = TestService.getTest()
    }]);
});
