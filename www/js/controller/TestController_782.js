define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_782',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 782');
    	$scope.test = TestService.getTest()
    }]);
});
