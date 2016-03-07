angular.module('TestController_25', ['TestService'])
	.controller('Controller_25', function($scope, $state, TestService){
		console.log('enter controller_25')
		$scope.test = TestService.getTest()
	})
