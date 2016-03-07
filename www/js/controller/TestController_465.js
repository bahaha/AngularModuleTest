angular.module('TestController_465', ['TestService'])
	.controller('Controller_465', function($scope, $state, TestService){
		console.log('enter controller_465')
		$scope.test = TestService.getTest()
	})
