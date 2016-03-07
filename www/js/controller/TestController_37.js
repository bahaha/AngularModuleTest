angular.module('TestController_37', ['TestService'])
	.controller('Controller_37', function($scope, $state, TestService){
		console.log('enter controller_37')
		$scope.test = TestService.getTest()
	})
