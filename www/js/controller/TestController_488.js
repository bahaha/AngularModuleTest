angular.module('TestController_488', ['TestService'])
	.controller('Controller_488', function($scope, $state, TestService){
		console.log('enter controller_488')
		$scope.test = TestService.getTest()
	})
