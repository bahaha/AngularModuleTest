angular.module('TestController_609', ['TestService'])
	.controller('Controller_609', function($scope, $state, TestService){
		console.log('enter controller_609')
		$scope.test = TestService.getTest()
	})
