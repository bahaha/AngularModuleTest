define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_663',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 663');
    	$scope.test = TestService.getTest()
    }]);
});
