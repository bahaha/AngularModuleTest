angular.module('TestController_549', ['TestService'])
	.controller('Controller_549', function($scope, $state, TestService){
		console.log('enter controller_549')
		$scope.test = TestService.getTest()
	})
