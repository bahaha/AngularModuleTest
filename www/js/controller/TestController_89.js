angular.module('TestController_89', ['TestService'])
	.controller('Controller_89', function($scope, $state, TestService){
		console.log('enter controller_89')
		$scope.test = TestService.getTest()
	})
