angular.module('TestController_843', ['TestService'])
	.controller('Controller_843', function($scope, $state, TestService){
		console.log('enter controller_843')
		$scope.test = TestService.getTest()
	})
