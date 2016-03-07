define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_411',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 411');
    	$scope.test = TestService.getTest()
    }]);
});
