angular.module('TestController_780', ['TestService'])
	.controller('Controller_780', function($scope, $state, TestService){
		console.log('enter controller_780')
		$scope.test = TestService.getTest()
	})
