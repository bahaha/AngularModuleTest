define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_818',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 818');
    	$scope.test = TestService.getTest()
    }]);
});
