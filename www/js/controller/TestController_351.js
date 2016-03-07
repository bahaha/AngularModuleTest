angular.module('TestController_351', ['TestService'])
	.controller('Controller_351', function($scope, $state, TestService){
		console.log('enter controller_351')
		$scope.test = TestService.getTest()
	})
