define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_379',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 379');
    	$scope.test = TestService.getTest()
    }]);
});
