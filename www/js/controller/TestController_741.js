angular.module('TestController_741', ['TestService'])
	.controller('Controller_741', function($scope, $state, TestService){
		console.log('enter controller_741')
		$scope.test = TestService.getTest()
	})
