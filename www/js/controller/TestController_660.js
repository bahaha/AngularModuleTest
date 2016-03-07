angular.module('TestController_660', ['TestService'])
	.controller('Controller_660', function($scope, $state, TestService){
		console.log('enter controller_660')
		$scope.test = TestService.getTest()
	})
