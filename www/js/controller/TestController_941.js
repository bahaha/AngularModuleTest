angular.module('TestController_941', ['TestService'])
	.controller('Controller_941', function($scope, $state, TestService){
		console.log('enter controller_941')
		$scope.test = TestService.getTest()
	})
