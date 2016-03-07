define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_177',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 177');
    	$scope.test = TestService.getTest()
    }]);
});
