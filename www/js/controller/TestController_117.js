define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_117',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 117');
    	$scope.test = TestService.getTest()
    }]);
});
