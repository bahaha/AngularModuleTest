angular.module('TestController_786', ['TestService'])
	.controller('Controller_786', function($scope, $state, TestService){
		console.log('enter controller_786')
		$scope.test = TestService.getTest()
	})
