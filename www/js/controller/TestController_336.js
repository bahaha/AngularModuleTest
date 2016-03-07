angular.module('TestController_336', ['TestService'])
	.controller('Controller_336', function($scope, $state, TestService){
		console.log('enter controller_336')
		$scope.test = TestService.getTest()
	})
