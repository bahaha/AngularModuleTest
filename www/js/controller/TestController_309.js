angular.module('TestController_309', ['TestService'])
	.controller('Controller_309', function($scope, $state, TestService){
		console.log('enter controller_309')
		$scope.test = TestService.getTest()
	})
