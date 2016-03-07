angular.module('TestController_449', ['TestService'])
	.controller('Controller_449', function($scope, $state, TestService){
		console.log('enter controller_449')
		$scope.test = TestService.getTest()
	})
