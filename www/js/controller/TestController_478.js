angular.module('TestController_478', ['TestService'])
	.controller('Controller_478', function($scope, $state, TestService){
		console.log('enter controller_478')
		$scope.test = TestService.getTest()
	})
