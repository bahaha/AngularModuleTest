define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_813',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 813');
    	$scope.test = TestService.getTest()
    }]);
});
