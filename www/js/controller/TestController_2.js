angular.module('TestController_2', ['TestService'])
	.controller('Controller_2', function($scope, $state, TestService){
		console.log('enter controller_2')
		$scope.test = TestService.getTest()
	})
