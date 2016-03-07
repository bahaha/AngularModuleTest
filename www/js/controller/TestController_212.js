angular.module('TestController_212', ['TestService'])
	.controller('Controller_212', function($scope, $state, TestService){
		console.log('enter controller_212')
		$scope.test = TestService.getTest()
	})
