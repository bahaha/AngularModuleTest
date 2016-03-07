angular.module('TestController_153', ['TestService'])
	.controller('Controller_153', function($scope, $state, TestService){
		console.log('enter controller_153')
		$scope.test = TestService.getTest()
	})
