angular.module('TestController_256', ['TestService'])
	.controller('Controller_256', function($scope, $state, TestService){
		console.log('enter controller_256')
		$scope.test = TestService.getTest()
	})
