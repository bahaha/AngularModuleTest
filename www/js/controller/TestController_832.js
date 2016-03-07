define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_832',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 832');
    	$scope.test = TestService.getTest()
    }]);
});
