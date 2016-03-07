angular.module('TestController_630', ['TestService'])
	.controller('Controller_630', function($scope, $state, TestService){
		console.log('enter controller_630')
		$scope.test = TestService.getTest()
	})
