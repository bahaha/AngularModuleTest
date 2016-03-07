angular.module('TestController_320', ['TestService'])
	.controller('Controller_320', function($scope, $state, TestService){
		console.log('enter controller_320')
		$scope.test = TestService.getTest()
	})
