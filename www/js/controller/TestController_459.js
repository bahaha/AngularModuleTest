angular.module('TestController_459', ['TestService'])
	.controller('Controller_459', function($scope, $state, TestService){
		console.log('enter controller_459')
		$scope.test = TestService.getTest()
	})
