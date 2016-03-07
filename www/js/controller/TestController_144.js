angular.module('TestController_144', ['TestService'])
	.controller('Controller_144', function($scope, $state, TestService){
		console.log('enter controller_144')
		$scope.test = TestService.getTest()
	})
