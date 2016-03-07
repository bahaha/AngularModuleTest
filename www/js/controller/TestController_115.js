angular.module('TestController_115', ['TestService'])
	.controller('Controller_115', function($scope, $state, TestService){
		console.log('enter controller_115')
		$scope.test = TestService.getTest()
	})
