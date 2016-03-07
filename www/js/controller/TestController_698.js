define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_698',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 698');
    	$scope.test = TestService.getTest()
    }]);
});
