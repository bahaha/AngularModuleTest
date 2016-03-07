angular.module('TestController_500', ['TestService'])
	.controller('Controller_500', function($scope, $state, TestService){
		console.log('enter controller_500')
		$scope.test = TestService.getTest()
	})
