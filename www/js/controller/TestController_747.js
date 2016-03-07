angular.module('TestController_747', ['TestService'])
	.controller('Controller_747', function($scope, $state, TestService){
		console.log('enter controller_747')
		$scope.test = TestService.getTest()
	})
