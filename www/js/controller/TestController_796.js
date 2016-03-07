angular.module('TestController_796', ['TestService'])
	.controller('Controller_796', function($scope, $state, TestService){
		console.log('enter controller_796')
		$scope.test = TestService.getTest()
	})
