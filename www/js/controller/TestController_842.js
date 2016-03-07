define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_842',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 842');
    	$scope.test = TestService.getTest()
    }]);
});
