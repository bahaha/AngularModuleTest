define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_830',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 830');
    	$scope.test = TestService.getTest()
    }]);
});
