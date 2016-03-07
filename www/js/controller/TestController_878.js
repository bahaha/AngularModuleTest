angular.module('TestController_878', ['TestService'])
	.controller('Controller_878', function($scope, $state, TestService){
		console.log('enter controller_878')
		$scope.test = TestService.getTest()
	})
