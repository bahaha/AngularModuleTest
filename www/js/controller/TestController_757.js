angular.module('TestController_757', ['TestService'])
	.controller('Controller_757', function($scope, $state, TestService){
		console.log('enter controller_757')
		$scope.test = TestService.getTest()
	})
