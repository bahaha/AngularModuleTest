angular.module('TestController_250', ['TestService'])
	.controller('Controller_250', function($scope, $state, TestService){
		console.log('enter controller_250')
		$scope.test = TestService.getTest()
	})
