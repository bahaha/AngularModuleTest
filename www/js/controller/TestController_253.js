define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_253',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 253');
    	$scope.test = TestService.getTest()
    }]);
});
