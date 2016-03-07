angular.module('TestController_370', ['TestService'])
	.controller('Controller_370', function($scope, $state, TestService){
		console.log('enter controller_370')
		$scope.test = TestService.getTest()
	})
