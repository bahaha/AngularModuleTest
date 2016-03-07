angular.module('TestController_824', ['TestService'])
	.controller('Controller_824', function($scope, $state, TestService){
		console.log('enter controller_824')
		$scope.test = TestService.getTest()
	})
