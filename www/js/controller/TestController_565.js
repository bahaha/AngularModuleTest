define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_565',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 565');
    	$scope.test = TestService.getTest()
    }]);
});
