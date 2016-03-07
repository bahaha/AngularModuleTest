angular.module('TestController_512', ['TestService'])
	.controller('Controller_512', function($scope, $state, TestService){
		console.log('enter controller_512')
		$scope.test = TestService.getTest()
	})
