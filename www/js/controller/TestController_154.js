angular.module('TestController_154', ['TestService'])
	.controller('Controller_154', function($scope, $state, TestService){
		console.log('enter controller_154')
		$scope.test = TestService.getTest()
	})
