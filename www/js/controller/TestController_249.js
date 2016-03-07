angular.module('TestController_249', ['TestService'])
	.controller('Controller_249', function($scope, $state, TestService){
		console.log('enter controller_249')
		$scope.test = TestService.getTest()
	})
