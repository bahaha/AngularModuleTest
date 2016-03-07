define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_505',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 505');
    	$scope.test = TestService.getTest()
    }]);
});
