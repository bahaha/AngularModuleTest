angular.module('TestController_991', ['TestService'])
	.controller('Controller_991', function($scope, $state, TestService){
		console.log('enter controller_991')
		$scope.test = TestService.getTest()
	})
