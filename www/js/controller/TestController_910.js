angular.module('TestController_910', ['TestService'])
	.controller('Controller_910', function($scope, $state, TestService){
		console.log('enter controller_910')
		$scope.test = TestService.getTest()
	})
