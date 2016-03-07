angular.module('TestController_664', ['TestService'])
	.controller('Controller_664', function($scope, $state, TestService){
		console.log('enter controller_664')
		$scope.test = TestService.getTest()
	})
