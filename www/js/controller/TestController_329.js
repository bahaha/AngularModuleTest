angular.module('TestController_329', ['TestService'])
	.controller('Controller_329', function($scope, $state, TestService){
		console.log('enter controller_329')
		$scope.test = TestService.getTest()
	})
