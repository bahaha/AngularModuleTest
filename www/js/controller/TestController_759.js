angular.module('TestController_759', ['TestService'])
	.controller('Controller_759', function($scope, $state, TestService){
		console.log('enter controller_759')
		$scope.test = TestService.getTest()
	})
