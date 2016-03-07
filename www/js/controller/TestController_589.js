angular.module('TestController_589', ['TestService'])
	.controller('Controller_589', function($scope, $state, TestService){
		console.log('enter controller_589')
		$scope.test = TestService.getTest()
	})
