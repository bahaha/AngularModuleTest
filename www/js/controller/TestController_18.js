angular.module('TestController_18', ['TestService'])
	.controller('Controller_18', function($scope, $state, TestService){
		console.log('enter controller_18')
		$scope.test = TestService.getTest()
	})
