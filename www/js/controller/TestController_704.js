angular.module('TestController_704', ['TestService'])
	.controller('Controller_704', function($scope, $state, TestService){
		console.log('enter controller_704')
		$scope.test = TestService.getTest()
	})
