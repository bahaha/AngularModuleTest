angular.module('TestController_990', ['TestService'])
	.controller('Controller_990', function($scope, $state, TestService){
		console.log('enter controller_990')
		$scope.test = TestService.getTest()
	})
