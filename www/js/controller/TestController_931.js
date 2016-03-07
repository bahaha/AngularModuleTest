angular.module('TestController_931', ['TestService'])
	.controller('Controller_931', function($scope, $state, TestService){
		console.log('enter controller_931')
		$scope.test = TestService.getTest()
	})
