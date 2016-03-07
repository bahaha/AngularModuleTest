angular.module('TestController_427', ['TestService'])
	.controller('Controller_427', function($scope, $state, TestService){
		console.log('enter controller_427')
		$scope.test = TestService.getTest()
	})
