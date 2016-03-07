angular.module('TestController_359', ['TestService'])
	.controller('Controller_359', function($scope, $state, TestService){
		console.log('enter controller_359')
		$scope.test = TestService.getTest()
	})
