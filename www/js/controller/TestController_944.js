angular.module('TestController_944', ['TestService'])
	.controller('Controller_944', function($scope, $state, TestService){
		console.log('enter controller_944')
		$scope.test = TestService.getTest()
	})
