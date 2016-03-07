angular.module('TestController_777', ['TestService'])
	.controller('Controller_777', function($scope, $state, TestService){
		console.log('enter controller_777')
		$scope.test = TestService.getTest()
	})
