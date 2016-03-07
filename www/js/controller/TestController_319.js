angular.module('TestController_319', ['TestService'])
	.controller('Controller_319', function($scope, $state, TestService){
		console.log('enter controller_319')
		$scope.test = TestService.getTest()
	})
