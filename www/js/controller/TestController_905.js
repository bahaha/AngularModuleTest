angular.module('TestController_905', ['TestService'])
	.controller('Controller_905', function($scope, $state, TestService){
		console.log('enter controller_905')
		$scope.test = TestService.getTest()
	})
