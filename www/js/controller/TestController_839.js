angular.module('TestController_839', ['TestService'])
	.controller('Controller_839', function($scope, $state, TestService){
		console.log('enter controller_839')
		$scope.test = TestService.getTest()
	})
