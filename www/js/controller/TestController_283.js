angular.module('TestController_283', ['TestService'])
	.controller('Controller_283', function($scope, $state, TestService){
		console.log('enter controller_283')
		$scope.test = TestService.getTest()
	})
