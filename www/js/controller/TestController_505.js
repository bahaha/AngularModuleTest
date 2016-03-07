angular.module('TestController_505', ['TestService'])
	.controller('Controller_505', function($scope, $state, TestService){
		console.log('enter controller_505')
		$scope.test = TestService.getTest()
	})
