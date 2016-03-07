angular.module('TestController_387', ['TestService'])
	.controller('Controller_387', function($scope, $state, TestService){
		console.log('enter controller_387')
		$scope.test = TestService.getTest()
	})
