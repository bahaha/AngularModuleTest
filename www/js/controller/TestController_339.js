angular.module('TestController_339', ['TestService'])
	.controller('Controller_339', function($scope, $state, TestService){
		console.log('enter controller_339')
		$scope.test = TestService.getTest()
	})
