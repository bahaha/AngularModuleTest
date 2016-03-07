angular.module('TestController_436', ['TestService'])
	.controller('Controller_436', function($scope, $state, TestService){
		console.log('enter controller_436')
		$scope.test = TestService.getTest()
	})
