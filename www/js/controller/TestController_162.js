define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_162',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 162');
    	$scope.test = TestService.getTest()
    }]);
});
