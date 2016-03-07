define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_416',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 416');
    	$scope.test = TestService.getTest()
    }]);
});
