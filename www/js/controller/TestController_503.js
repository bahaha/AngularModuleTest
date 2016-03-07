angular.module('TestController_503', ['TestService'])
	.controller('Controller_503', function($scope, $state, TestService){
		console.log('enter controller_503')
		$scope.test = TestService.getTest()
	})
