define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_827',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 827');
    	$scope.test = TestService.getTest()
    }]);
});
