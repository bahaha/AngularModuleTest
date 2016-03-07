angular.module('TestController_366', ['TestService'])
	.controller('Controller_366', function($scope, $state, TestService){
		console.log('enter controller_366')
		$scope.test = TestService.getTest()
	})
