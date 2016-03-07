angular.module('TestController_182', ['TestService'])
	.controller('Controller_182', function($scope, $state, TestService){
		console.log('enter controller_182')
		$scope.test = TestService.getTest()
	})
