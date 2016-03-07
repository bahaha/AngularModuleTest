angular.module('TestController_161', ['TestService'])
	.controller('Controller_161', function($scope, $state, TestService){
		console.log('enter controller_161')
		$scope.test = TestService.getTest()
	})
