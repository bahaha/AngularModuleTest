angular.module('TestController_405', ['TestService'])
	.controller('Controller_405', function($scope, $state, TestService){
		console.log('enter controller_405')
		$scope.test = TestService.getTest()
	})
