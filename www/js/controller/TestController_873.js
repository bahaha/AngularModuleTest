angular.module('TestController_873', ['TestService'])
	.controller('Controller_873', function($scope, $state, TestService){
		console.log('enter controller_873')
		$scope.test = TestService.getTest()
	})
