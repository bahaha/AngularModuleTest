angular.module('TestController_715', ['TestService'])
	.controller('Controller_715', function($scope, $state, TestService){
		console.log('enter controller_715')
		$scope.test = TestService.getTest()
	})
