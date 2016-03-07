angular.module('TestController_177', ['TestService'])
	.controller('Controller_177', function($scope, $state, TestService){
		console.log('enter controller_177')
		$scope.test = TestService.getTest()
	})
