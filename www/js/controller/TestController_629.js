define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_629',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 629');
    	$scope.test = TestService.getTest()
    }]);
});
