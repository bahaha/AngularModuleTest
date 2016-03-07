angular.module('TestController_240', ['TestService'])
	.controller('Controller_240', function($scope, $state, TestService){
		console.log('enter controller_240')
		$scope.test = TestService.getTest()
	})
