angular.module('TestController_53', ['TestService'])
	.controller('Controller_53', function($scope, $state, TestService){
		console.log('enter controller_53')
		$scope.test = TestService.getTest()
	})
