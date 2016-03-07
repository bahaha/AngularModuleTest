angular.module('TestController_710', ['TestService'])
	.controller('Controller_710', function($scope, $state, TestService){
		console.log('enter controller_710')
		$scope.test = TestService.getTest()
	})
