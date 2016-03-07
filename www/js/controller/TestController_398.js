angular.module('TestController_398', ['TestService'])
	.controller('Controller_398', function($scope, $state, TestService){
		console.log('enter controller_398')
		$scope.test = TestService.getTest()
	})
