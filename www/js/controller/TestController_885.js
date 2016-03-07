angular.module('TestController_885', ['TestService'])
	.controller('Controller_885', function($scope, $state, TestService){
		console.log('enter controller_885')
		$scope.test = TestService.getTest()
	})
