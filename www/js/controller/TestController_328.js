angular.module('TestController_328', ['TestService'])
	.controller('Controller_328', function($scope, $state, TestService){
		console.log('enter controller_328')
		$scope.test = TestService.getTest()
	})
