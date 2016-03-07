angular.module('TestController_222', ['TestService'])
	.controller('Controller_222', function($scope, $state, TestService){
		console.log('enter controller_222')
		$scope.test = TestService.getTest()
	})
