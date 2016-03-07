angular.module('TestController_399', ['TestService'])
	.controller('Controller_399', function($scope, $state, TestService){
		console.log('enter controller_399')
		$scope.test = TestService.getTest()
	})
