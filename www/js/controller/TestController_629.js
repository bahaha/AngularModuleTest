angular.module('TestController_629', ['TestService'])
	.controller('Controller_629', function($scope, $state, TestService){
		console.log('enter controller_629')
		$scope.test = TestService.getTest()
	})
