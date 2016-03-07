define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_445',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 445');
    	$scope.test = TestService.getTest()
    }]);
});
