define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_19',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 19');
    	$scope.test = TestService.getTest()
    }]);
});
