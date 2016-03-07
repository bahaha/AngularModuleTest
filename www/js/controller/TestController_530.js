define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_530',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 530');
    	$scope.test = TestService.getTest()
    }]);
});
