angular.module('TestController_602', ['TestService'])
	.controller('Controller_602', function($scope, $state, TestService){
		console.log('enter controller_602')
		$scope.test = TestService.getTest()
	})
