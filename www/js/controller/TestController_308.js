angular.module('TestController_308', ['TestService'])
	.controller('Controller_308', function($scope, $state, TestService){
		console.log('enter controller_308')
		$scope.test = TestService.getTest()
	})
