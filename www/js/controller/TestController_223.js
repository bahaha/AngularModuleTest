angular.module('TestController_223', ['TestService'])
	.controller('Controller_223', function($scope, $state, TestService){
		console.log('enter controller_223')
		$scope.test = TestService.getTest()
	})
