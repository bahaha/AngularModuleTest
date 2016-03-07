angular.module('TestController_961', ['TestService'])
	.controller('Controller_961', function($scope, $state, TestService){
		console.log('enter controller_961')
		$scope.test = TestService.getTest()
	})
