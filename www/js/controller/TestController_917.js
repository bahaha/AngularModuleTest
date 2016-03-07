angular.module('TestController_917', ['TestService'])
	.controller('Controller_917', function($scope, $state, TestService){
		console.log('enter controller_917')
		$scope.test = TestService.getTest()
	})
