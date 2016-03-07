define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_814',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 814');
    	$scope.test = TestService.getTest()
    }]);
});
