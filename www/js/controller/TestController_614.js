angular.module('TestController_614', ['TestService'])
	.controller('Controller_614', function($scope, $state, TestService){
		console.log('enter controller_614')
		$scope.test = TestService.getTest()
	})
