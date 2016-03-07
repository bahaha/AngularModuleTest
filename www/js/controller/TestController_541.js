angular.module('TestController_541', ['TestService'])
	.controller('Controller_541', function($scope, $state, TestService){
		console.log('enter controller_541')
		$scope.test = TestService.getTest()
	})
