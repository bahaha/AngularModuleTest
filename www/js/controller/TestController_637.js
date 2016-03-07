angular.module('TestController_637', ['TestService'])
	.controller('Controller_637', function($scope, $state, TestService){
		console.log('enter controller_637')
		$scope.test = TestService.getTest()
	})
