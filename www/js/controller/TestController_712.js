angular.module('TestController_712', ['TestService'])
	.controller('Controller_712', function($scope, $state, TestService){
		console.log('enter controller_712')
		$scope.test = TestService.getTest()
	})
