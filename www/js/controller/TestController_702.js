angular.module('TestController_702', ['TestService'])
	.controller('Controller_702', function($scope, $state, TestService){
		console.log('enter controller_702')
		$scope.test = TestService.getTest()
	})
