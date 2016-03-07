angular.module('TestController_654', ['TestService'])
	.controller('Controller_654', function($scope, $state, TestService){
		console.log('enter controller_654')
		$scope.test = TestService.getTest()
	})
