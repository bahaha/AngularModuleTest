angular.module('TestController_213', ['TestService'])
	.controller('Controller_213', function($scope, $state, TestService){
		console.log('enter controller_213')
		$scope.test = TestService.getTest()
	})
