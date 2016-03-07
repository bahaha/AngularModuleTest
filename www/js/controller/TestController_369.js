define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_369',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 369');
    	$scope.test = TestService.getTest()
    }]);
});
