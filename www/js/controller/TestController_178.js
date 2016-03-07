angular.module('TestController_178', ['TestService'])
	.controller('Controller_178', function($scope, $state, TestService){
		console.log('enter controller_178')
		$scope.test = TestService.getTest()
	})
