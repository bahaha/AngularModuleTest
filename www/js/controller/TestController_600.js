angular.module('TestController_600', ['TestService'])
	.controller('Controller_600', function($scope, $state, TestService){
		console.log('enter controller_600')
		$scope.test = TestService.getTest()
	})
