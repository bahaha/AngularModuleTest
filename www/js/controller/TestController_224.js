define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_224',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 224');
    	$scope.test = TestService.getTest()
    }]);
});
