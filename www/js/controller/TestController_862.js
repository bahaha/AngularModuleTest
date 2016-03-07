angular.module('TestController_862', ['TestService'])
	.controller('Controller_862', function($scope, $state, TestService){
		console.log('enter controller_862')
		$scope.test = TestService.getTest()
	})
