angular.module('TestController_767', ['TestService'])
	.controller('Controller_767', function($scope, $state, TestService){
		console.log('enter controller_767')
		$scope.test = TestService.getTest()
	})
