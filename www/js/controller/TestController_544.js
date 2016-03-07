define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_544',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 544');
    	$scope.test = TestService.getTest()
    }]);
});
