define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_452',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 452');
    	$scope.test = TestService.getTest()
    }]);
});
