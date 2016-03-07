angular.module('TestController_658', ['TestService'])
	.controller('Controller_658', function($scope, $state, TestService){
		console.log('enter controller_658')
		$scope.test = TestService.getTest()
	})
