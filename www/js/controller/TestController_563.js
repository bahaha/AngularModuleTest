angular.module('TestController_563', ['TestService'])
	.controller('Controller_563', function($scope, $state, TestService){
		console.log('enter controller_563')
		$scope.test = TestService.getTest()
	})
