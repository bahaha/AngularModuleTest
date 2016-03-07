angular.module('TestController_384', ['TestService'])
	.controller('Controller_384', function($scope, $state, TestService){
		console.log('enter controller_384')
		$scope.test = TestService.getTest()
	})
