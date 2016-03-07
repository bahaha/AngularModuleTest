define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_539',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 539');
    	$scope.test = TestService.getTest()
    }]);
});
