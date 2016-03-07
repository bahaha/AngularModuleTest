angular.module('TestController_44', ['TestService'])
	.controller('Controller_44', function($scope, $state, TestService){
		console.log('enter controller_44')
		$scope.test = TestService.getTest()
	})
