define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_985',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 985');
    	$scope.test = TestService.getTest()
    }]);
});
