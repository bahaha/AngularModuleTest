angular.module('TestController_322', ['TestService'])
	.controller('Controller_322', function($scope, $state, TestService){
		console.log('enter controller_322')
		$scope.test = TestService.getTest()
	})
