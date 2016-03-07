angular.module('TestController_453', ['TestService'])
	.controller('Controller_453', function($scope, $state, TestService){
		console.log('enter controller_453')
		$scope.test = TestService.getTest()
	})
