angular.module('TestController_844', ['TestService'])
	.controller('Controller_844', function($scope, $state, TestService){
		console.log('enter controller_844')
		$scope.test = TestService.getTest()
	})
