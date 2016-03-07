angular.module('TestController_251', ['TestService'])
	.controller('Controller_251', function($scope, $state, TestService){
		console.log('enter controller_251')
		$scope.test = TestService.getTest()
	})
