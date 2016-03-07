define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_971',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 971');
    	$scope.test = TestService.getTest()
    }]);
});
