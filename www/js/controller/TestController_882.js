define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_882',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 882');
    	$scope.test = TestService.getTest()
    }]);
});
