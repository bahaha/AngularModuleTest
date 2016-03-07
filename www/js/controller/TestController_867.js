define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_867',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 867');
    	$scope.test = TestService.getTest()
    }]);
});
