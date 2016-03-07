define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_863',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 863');
    	$scope.test = TestService.getTest()
    }]);
});
