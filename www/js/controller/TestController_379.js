angular.module('TestController_379', ['TestService'])
	.controller('Controller_379', function($scope, $state, TestService){
		console.log('enter controller_379')
		$scope.test = TestService.getTest()
	})
