angular.module('TestController_953', ['TestService'])
	.controller('Controller_953', function($scope, $state, TestService){
		console.log('enter controller_953')
		$scope.test = TestService.getTest()
	})
