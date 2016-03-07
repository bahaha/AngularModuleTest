angular.module('TestController_364', ['TestService'])
	.controller('Controller_364', function($scope, $state, TestService){
		console.log('enter controller_364')
		$scope.test = TestService.getTest()
	})
