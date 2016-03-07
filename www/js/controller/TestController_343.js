angular.module('TestController_343', ['TestService'])
	.controller('Controller_343', function($scope, $state, TestService){
		console.log('enter controller_343')
		$scope.test = TestService.getTest()
	})
