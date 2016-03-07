angular.module('TestController_902', ['TestService'])
	.controller('Controller_902', function($scope, $state, TestService){
		console.log('enter controller_902')
		$scope.test = TestService.getTest()
	})
