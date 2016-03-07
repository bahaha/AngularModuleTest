define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_251',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 251');
    	$scope.test = TestService.getTest()
    }]);
});
