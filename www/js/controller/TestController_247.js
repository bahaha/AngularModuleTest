angular.module('TestController_247', ['TestService'])
	.controller('Controller_247', function($scope, $state, TestService){
		console.log('enter controller_247')
		$scope.test = TestService.getTest()
	})
