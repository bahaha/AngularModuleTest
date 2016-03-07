angular.module('TestController_243', ['TestService'])
	.controller('Controller_243', function($scope, $state, TestService){
		console.log('enter controller_243')
		$scope.test = TestService.getTest()
	})
