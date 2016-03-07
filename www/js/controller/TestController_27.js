define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_27',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 27');
    	$scope.test = TestService.getTest()
    }]);
});
