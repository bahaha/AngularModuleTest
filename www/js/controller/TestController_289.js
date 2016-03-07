angular.module('TestController_289', ['TestService'])
	.controller('Controller_289', function($scope, $state, TestService){
		console.log('enter controller_289')
		$scope.test = TestService.getTest()
	})
