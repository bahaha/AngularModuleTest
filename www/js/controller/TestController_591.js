angular.module('TestController_591', ['TestService'])
	.controller('Controller_591', function($scope, $state, TestService){
		console.log('enter controller_591')
		$scope.test = TestService.getTest()
	})
