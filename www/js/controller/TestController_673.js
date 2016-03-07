angular.module('TestController_673', ['TestService'])
	.controller('Controller_673', function($scope, $state, TestService){
		console.log('enter controller_673')
		$scope.test = TestService.getTest()
	})
