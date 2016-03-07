angular.module('TestController_981', ['TestService'])
	.controller('Controller_981', function($scope, $state, TestService){
		console.log('enter controller_981')
		$scope.test = TestService.getTest()
	})
