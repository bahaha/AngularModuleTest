angular.module('TestController_821', ['TestService'])
	.controller('Controller_821', function($scope, $state, TestService){
		console.log('enter controller_821')
		$scope.test = TestService.getTest()
	})
