angular.module('TestController_493', ['TestService'])
	.controller('Controller_493', function($scope, $state, TestService){
		console.log('enter controller_493')
		$scope.test = TestService.getTest()
	})
