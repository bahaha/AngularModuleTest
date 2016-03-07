angular.module('TestController_146', ['TestService'])
	.controller('Controller_146', function($scope, $state, TestService){
		console.log('enter controller_146')
		$scope.test = TestService.getTest()
	})
