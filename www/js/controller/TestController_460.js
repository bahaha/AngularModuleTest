angular.module('TestController_460', ['TestService'])
	.controller('Controller_460', function($scope, $state, TestService){
		console.log('enter controller_460')
		$scope.test = TestService.getTest()
	})
