angular.module('TestController_176', ['TestService'])
	.controller('Controller_176', function($scope, $state, TestService){
		console.log('enter controller_176')
		$scope.test = TestService.getTest()
	})
