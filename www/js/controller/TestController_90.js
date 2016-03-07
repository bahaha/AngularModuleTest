angular.module('TestController_90', ['TestService'])
	.controller('Controller_90', function($scope, $state, TestService){
		console.log('enter controller_90')
		$scope.test = TestService.getTest()
	})
