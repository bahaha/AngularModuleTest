define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_904',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 904');
    	$scope.test = TestService.getTest()
    }]);
});
