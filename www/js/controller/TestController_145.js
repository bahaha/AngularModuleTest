angular.module('TestController_145', ['TestService'])
	.controller('Controller_145', function($scope, $state, TestService){
		console.log('enter controller_145')
		$scope.test = TestService.getTest()
	})
