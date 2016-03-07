define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_802',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 802');
    	$scope.test = TestService.getTest()
    }]);
});
