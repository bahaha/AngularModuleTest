angular.module('TestController_124', ['TestService'])
	.controller('Controller_124', function($scope, $state, TestService){
		console.log('enter controller_124')
		$scope.test = TestService.getTest()
	})
