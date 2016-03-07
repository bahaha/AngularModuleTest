angular.module('TestController_245', ['TestService'])
	.controller('Controller_245', function($scope, $state, TestService){
		console.log('enter controller_245')
		$scope.test = TestService.getTest()
	})
