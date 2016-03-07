angular.module('TestController_518', ['TestService'])
	.controller('Controller_518', function($scope, $state, TestService){
		console.log('enter controller_518')
		$scope.test = TestService.getTest()
	})
