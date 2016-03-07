angular.module('TestController_775', ['TestService'])
	.controller('Controller_775', function($scope, $state, TestService){
		console.log('enter controller_775')
		$scope.test = TestService.getTest()
	})
