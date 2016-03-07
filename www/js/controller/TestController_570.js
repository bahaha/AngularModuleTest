angular.module('TestController_570', ['TestService'])
	.controller('Controller_570', function($scope, $state, TestService){
		console.log('enter controller_570')
		$scope.test = TestService.getTest()
	})
