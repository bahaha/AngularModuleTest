define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_374',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 374');
    	$scope.test = TestService.getTest()
    }]);
});
