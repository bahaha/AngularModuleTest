define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_708',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 708');
    	$scope.test = TestService.getTest()
    }]);
});
