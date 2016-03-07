angular.module('TestController_413', ['TestService'])
	.controller('Controller_413', function($scope, $state, TestService){
		console.log('enter controller_413')
		$scope.test = TestService.getTest()
	})
