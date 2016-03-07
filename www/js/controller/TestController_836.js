define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_836',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 836');
    	$scope.test = TestService.getTest()
    }]);
});
