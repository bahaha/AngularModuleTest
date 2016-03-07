define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_476',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 476');
    	$scope.test = TestService.getTest()
    }]);
});
