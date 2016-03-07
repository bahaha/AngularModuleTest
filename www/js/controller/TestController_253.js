angular.module('TestController_253', ['TestService'])
	.controller('Controller_253', function($scope, $state, TestService){
		console.log('enter controller_253')
		$scope.test = TestService.getTest()
	})
