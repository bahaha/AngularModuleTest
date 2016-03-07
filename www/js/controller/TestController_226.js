angular.module('TestController_226', ['TestService'])
	.controller('Controller_226', function($scope, $state, TestService){
		console.log('enter controller_226')
		$scope.test = TestService.getTest()
	})
