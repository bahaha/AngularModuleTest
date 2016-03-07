angular.module('TestController_684', ['TestService'])
	.controller('Controller_684', function($scope, $state, TestService){
		console.log('enter controller_684')
		$scope.test = TestService.getTest()
	})
