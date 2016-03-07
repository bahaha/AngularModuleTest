angular.module('TestController_713', ['TestService'])
	.controller('Controller_713', function($scope, $state, TestService){
		console.log('enter controller_713')
		$scope.test = TestService.getTest()
	})
