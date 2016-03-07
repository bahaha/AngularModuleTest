define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_815',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 815');
    	$scope.test = TestService.getTest()
    }]);
});
