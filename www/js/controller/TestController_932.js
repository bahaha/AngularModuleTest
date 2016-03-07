define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_932',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 932');
    	$scope.test = TestService.getTest()
    }]);
});
