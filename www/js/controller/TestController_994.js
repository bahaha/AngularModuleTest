angular.module('TestController_994', ['TestService'])
	.controller('Controller_994', function($scope, $state, TestService){
		console.log('enter controller_994')
		$scope.test = TestService.getTest()
	})
