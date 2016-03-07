angular.module('TestController_590', ['TestService'])
	.controller('Controller_590', function($scope, $state, TestService){
		console.log('enter controller_590')
		$scope.test = TestService.getTest()
	})
