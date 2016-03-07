define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_945',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 945');
    	$scope.test = TestService.getTest()
    }]);
});
