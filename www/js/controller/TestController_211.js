define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_211',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 211');
    	$scope.test = TestService.getTest()
    }]);
});
