define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_894',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 894');
    	$scope.test = TestService.getTest()
    }]);
});
