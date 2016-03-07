define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_851',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 851');
    	$scope.test = TestService.getTest()
    }]);
});
