define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_859',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 859');
    	$scope.test = TestService.getTest()
    }]);
});
