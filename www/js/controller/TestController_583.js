angular.module('TestController_583', ['TestService'])
	.controller('Controller_583', function($scope, $state, TestService){
		console.log('enter controller_583')
		$scope.test = TestService.getTest()
	})
