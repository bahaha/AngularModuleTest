define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_463',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 463');
    	$scope.test = TestService.getTest()
    }]);
});
