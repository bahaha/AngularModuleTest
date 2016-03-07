angular.module('TestController_400', ['TestService'])
	.controller('Controller_400', function($scope, $state, TestService){
		console.log('enter controller_400')
		$scope.test = TestService.getTest()
	})
