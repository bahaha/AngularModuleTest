angular.module('TestController_121', ['TestService'])
	.controller('Controller_121', function($scope, $state, TestService){
		console.log('enter controller_121')
		$scope.test = TestService.getTest()
	})
