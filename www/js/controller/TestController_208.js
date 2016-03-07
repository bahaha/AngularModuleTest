angular.module('TestController_208', ['TestService'])
	.controller('Controller_208', function($scope, $state, TestService){
		console.log('enter controller_208')
		$scope.test = TestService.getTest()
	})
