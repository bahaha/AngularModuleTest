angular.module('TestController_540', ['TestService'])
	.controller('Controller_540', function($scope, $state, TestService){
		console.log('enter controller_540')
		$scope.test = TestService.getTest()
	})
