angular.module('TestController_903', ['TestService'])
	.controller('Controller_903', function($scope, $state, TestService){
		console.log('enter controller_903')
		$scope.test = TestService.getTest()
	})
