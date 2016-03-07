define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_624',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 624');
    	$scope.test = TestService.getTest()
    }]);
});
