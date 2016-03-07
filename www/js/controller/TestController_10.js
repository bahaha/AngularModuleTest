angular.module('TestController_10', ['TestService'])
	.controller('Controller_10', function($scope, $state, TestService){
		console.log('enter controller_10')
		$scope.test = TestService.getTest()
	})
