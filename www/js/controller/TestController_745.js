define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_745',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 745');
    	$scope.test = TestService.getTest()
    }]);
});
