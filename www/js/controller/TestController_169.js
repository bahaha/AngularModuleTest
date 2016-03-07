define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_169',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 169');
    	$scope.test = TestService.getTest()
    }]);
});
