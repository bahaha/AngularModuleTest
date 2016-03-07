angular.module('TestController_179', ['TestService'])
	.controller('Controller_179', function($scope, $state, TestService){
		console.log('enter controller_179')
		$scope.test = TestService.getTest()
	})
