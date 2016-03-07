angular.module('TestController_165', ['TestService'])
	.controller('Controller_165', function($scope, $state, TestService){
		console.log('enter controller_165')
		$scope.test = TestService.getTest()
	})
