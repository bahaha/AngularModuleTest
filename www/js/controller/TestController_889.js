define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_889',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 889');
    	$scope.test = TestService.getTest()
    }]);
});
