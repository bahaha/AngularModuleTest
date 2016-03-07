define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_673',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 673');
    	$scope.test = TestService.getTest()
    }]);
});
