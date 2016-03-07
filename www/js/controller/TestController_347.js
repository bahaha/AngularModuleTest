define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_347',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 347');
    	$scope.test = TestService.getTest()
    }]);
});
