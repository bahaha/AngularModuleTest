angular.module('TestController_963', ['TestService'])
	.controller('Controller_963', function($scope, $state, TestService){
		console.log('enter controller_963')
		$scope.test = TestService.getTest()
	})
