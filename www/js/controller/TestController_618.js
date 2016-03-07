define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_618',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 618');
    	$scope.test = TestService.getTest()
    }]);
});
