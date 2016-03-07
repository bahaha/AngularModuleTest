angular.module('TestController_280', ['TestService'])
	.controller('Controller_280', function($scope, $state, TestService){
		console.log('enter controller_280')
		$scope.test = TestService.getTest()
	})
