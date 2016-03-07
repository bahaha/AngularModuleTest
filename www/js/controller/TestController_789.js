angular.module('TestController_789', ['TestService'])
	.controller('Controller_789', function($scope, $state, TestService){
		console.log('enter controller_789')
		$scope.test = TestService.getTest()
	})
