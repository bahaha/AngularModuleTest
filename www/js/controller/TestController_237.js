angular.module('TestController_237', ['TestService'])
	.controller('Controller_237', function($scope, $state, TestService){
		console.log('enter controller_237')
		$scope.test = TestService.getTest()
	})
