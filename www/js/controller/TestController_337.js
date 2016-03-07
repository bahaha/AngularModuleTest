angular.module('TestController_337', ['TestService'])
	.controller('Controller_337', function($scope, $state, TestService){
		console.log('enter controller_337')
		$scope.test = TestService.getTest()
	})
