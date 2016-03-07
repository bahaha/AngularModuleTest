define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_675',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 675');
    	$scope.test = TestService.getTest()
    }]);
});
