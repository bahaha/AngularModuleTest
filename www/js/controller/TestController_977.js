define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_977',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 977');
    	$scope.test = TestService.getTest()
    }]);
});
