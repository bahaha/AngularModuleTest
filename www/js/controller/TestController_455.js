define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_455',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 455');
    	$scope.test = TestService.getTest()
    }]);
});
