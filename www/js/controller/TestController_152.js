define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_152',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 152');
    	$scope.test = TestService.getTest()
    }]);
});
