angular.module('TestController_298', ['TestService'])
	.controller('Controller_298', function($scope, $state, TestService){
		console.log('enter controller_298')
		$scope.test = TestService.getTest()
	})
