angular.module('TestController_157', ['TestService'])
	.controller('Controller_157', function($scope, $state, TestService){
		console.log('enter controller_157')
		$scope.test = TestService.getTest()
	})
