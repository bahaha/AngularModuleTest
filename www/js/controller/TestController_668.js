angular.module('TestController_668', ['TestService'])
	.controller('Controller_668', function($scope, $state, TestService){
		console.log('enter controller_668')
		$scope.test = TestService.getTest()
	})
