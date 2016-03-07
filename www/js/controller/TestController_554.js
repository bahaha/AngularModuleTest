angular.module('TestController_554', ['TestService'])
	.controller('Controller_554', function($scope, $state, TestService){
		console.log('enter controller_554')
		$scope.test = TestService.getTest()
	})
