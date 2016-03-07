define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_584',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 584');
    	$scope.test = TestService.getTest()
    }]);
});
