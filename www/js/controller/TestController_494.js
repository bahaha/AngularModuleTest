define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_494',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 494');
    	$scope.test = TestService.getTest()
    }]);
});
