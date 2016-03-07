angular.module('TestController_855', ['TestService'])
	.controller('Controller_855', function($scope, $state, TestService){
		console.log('enter controller_855')
		$scope.test = TestService.getTest()
	})
