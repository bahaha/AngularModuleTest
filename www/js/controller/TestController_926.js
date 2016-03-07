angular.module('TestController_926', ['TestService'])
	.controller('Controller_926', function($scope, $state, TestService){
		console.log('enter controller_926')
		$scope.test = TestService.getTest()
	})
