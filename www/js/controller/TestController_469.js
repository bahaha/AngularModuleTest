angular.module('TestController_469', ['TestService'])
	.controller('Controller_469', function($scope, $state, TestService){
		console.log('enter controller_469')
		$scope.test = TestService.getTest()
	})
