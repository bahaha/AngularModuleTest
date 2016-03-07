angular.module('TestController_567', ['TestService'])
	.controller('Controller_567', function($scope, $state, TestService){
		console.log('enter controller_567')
		$scope.test = TestService.getTest()
	})
