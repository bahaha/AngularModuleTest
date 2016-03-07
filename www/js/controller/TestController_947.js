angular.module('TestController_947', ['TestService'])
	.controller('Controller_947', function($scope, $state, TestService){
		console.log('enter controller_947')
		$scope.test = TestService.getTest()
	})
