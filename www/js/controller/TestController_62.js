angular.module('TestController_62', ['TestService'])
	.controller('Controller_62', function($scope, $state, TestService){
		console.log('enter controller_62')
		$scope.test = TestService.getTest()
	})
