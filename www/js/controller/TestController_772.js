define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_772',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 772');
    	$scope.test = TestService.getTest()
    }]);
});
