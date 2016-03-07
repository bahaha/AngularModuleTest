angular.module('TestController_698', ['TestService'])
	.controller('Controller_698', function($scope, $state, TestService){
		console.log('enter controller_698')
		$scope.test = TestService.getTest()
	})
