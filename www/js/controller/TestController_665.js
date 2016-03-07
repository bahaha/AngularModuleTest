define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_665',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 665');
    	$scope.test = TestService.getTest()
    }]);
});
