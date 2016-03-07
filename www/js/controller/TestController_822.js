angular.module('TestController_822', ['TestService'])
	.controller('Controller_822', function($scope, $state, TestService){
		console.log('enter controller_822')
		$scope.test = TestService.getTest()
	})
