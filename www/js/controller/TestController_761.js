define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_761',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 761');
    	$scope.test = TestService.getTest()
    }]);
});
