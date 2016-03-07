angular.module('TestController_32', ['TestService'])
	.controller('Controller_32', function($scope, $state, TestService){
		console.log('enter controller_32')
		$scope.test = TestService.getTest()
	})
