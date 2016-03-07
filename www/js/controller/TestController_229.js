define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_229',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 229');
    	$scope.test = TestService.getTest()
    }]);
});
