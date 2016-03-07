angular.module('TestController_538', ['TestService'])
	.controller('Controller_538', function($scope, $state, TestService){
		console.log('enter controller_538')
		$scope.test = TestService.getTest()
	})
