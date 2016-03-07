angular.module('TestController_206', ['TestService'])
	.controller('Controller_206', function($scope, $state, TestService){
		console.log('enter controller_206')
		$scope.test = TestService.getTest()
	})
