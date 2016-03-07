angular.module('TestController_982', ['TestService'])
	.controller('Controller_982', function($scope, $state, TestService){
		console.log('enter controller_982')
		$scope.test = TestService.getTest()
	})
