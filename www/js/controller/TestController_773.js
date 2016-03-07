angular.module('TestController_773', ['TestService'])
	.controller('Controller_773', function($scope, $state, TestService){
		console.log('enter controller_773')
		$scope.test = TestService.getTest()
	})
