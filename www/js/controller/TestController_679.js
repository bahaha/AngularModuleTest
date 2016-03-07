angular.module('TestController_679', ['TestService'])
	.controller('Controller_679', function($scope, $state, TestService){
		console.log('enter controller_679')
		$scope.test = TestService.getTest()
	})
