angular.module('TestController_255', ['TestService'])
	.controller('Controller_255', function($scope, $state, TestService){
		console.log('enter controller_255')
		$scope.test = TestService.getTest()
	})
