define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_987',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 987');
    	$scope.test = TestService.getTest()
    }]);
});
