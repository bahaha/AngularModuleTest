angular.module('TestController_693', ['TestService'])
	.controller('Controller_693', function($scope, $state, TestService){
		console.log('enter controller_693')
		$scope.test = TestService.getTest()
	})
