define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_685',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 685');
    	$scope.test = TestService.getTest()
    }]);
});
