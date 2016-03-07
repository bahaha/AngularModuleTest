angular.module('TestController_890', ['TestService'])
	.controller('Controller_890', function($scope, $state, TestService){
		console.log('enter controller_890')
		$scope.test = TestService.getTest()
	})
