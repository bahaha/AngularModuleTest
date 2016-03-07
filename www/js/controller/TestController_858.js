angular.module('TestController_858', ['TestService'])
	.controller('Controller_858', function($scope, $state, TestService){
		console.log('enter controller_858')
		$scope.test = TestService.getTest()
	})
