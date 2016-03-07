angular.module('TestController_98', ['TestService'])
	.controller('Controller_98', function($scope, $state, TestService){
		console.log('enter controller_98')
		$scope.test = TestService.getTest()
	})
