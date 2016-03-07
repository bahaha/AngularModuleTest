angular.module('TestController_246', ['TestService'])
	.controller('Controller_246', function($scope, $state, TestService){
		console.log('enter controller_246')
		$scope.test = TestService.getTest()
	})
