angular.module('TestController_58', ['TestService'])
	.controller('Controller_58', function($scope, $state, TestService){
		console.log('enter controller_58')
		$scope.test = TestService.getTest()
	})
