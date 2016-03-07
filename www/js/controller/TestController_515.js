angular.module('TestController_515', ['TestService'])
	.controller('Controller_515', function($scope, $state, TestService){
		console.log('enter controller_515')
		$scope.test = TestService.getTest()
	})
