angular.module('TestController_528', ['TestService'])
	.controller('Controller_528', function($scope, $state, TestService){
		console.log('enter controller_528')
		$scope.test = TestService.getTest()
	})
