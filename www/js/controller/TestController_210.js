angular.module('TestController_210', ['TestService'])
	.controller('Controller_210', function($scope, $state, TestService){
		console.log('enter controller_210')
		$scope.test = TestService.getTest()
	})
