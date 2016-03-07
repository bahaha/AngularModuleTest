angular.module('TestController_141', ['TestService'])
	.controller('Controller_141', function($scope, $state, TestService){
		console.log('enter controller_141')
		$scope.test = TestService.getTest()
	})
