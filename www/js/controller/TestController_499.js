angular.module('TestController_499', ['TestService'])
	.controller('Controller_499', function($scope, $state, TestService){
		console.log('enter controller_499')
		$scope.test = TestService.getTest()
	})
