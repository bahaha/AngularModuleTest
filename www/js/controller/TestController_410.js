angular.module('TestController_410', ['TestService'])
	.controller('Controller_410', function($scope, $state, TestService){
		console.log('enter controller_410')
		$scope.test = TestService.getTest()
	})
