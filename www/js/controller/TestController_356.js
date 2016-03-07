define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_356',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 356');
    	$scope.test = TestService.getTest()
    }]);
});
