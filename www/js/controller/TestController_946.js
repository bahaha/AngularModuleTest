angular.module('TestController_946', ['TestService'])
	.controller('Controller_946', function($scope, $state, TestService){
		console.log('enter controller_946')
		$scope.test = TestService.getTest()
	})
