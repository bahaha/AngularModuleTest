angular.module('TestController_201', ['TestService'])
	.controller('Controller_201', function($scope, $state, TestService){
		console.log('enter controller_201')
		$scope.test = TestService.getTest()
	})
