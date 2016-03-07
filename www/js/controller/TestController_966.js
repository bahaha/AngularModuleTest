angular.module('TestController_966', ['TestService'])
	.controller('Controller_966', function($scope, $state, TestService){
		console.log('enter controller_966')
		$scope.test = TestService.getTest()
	})
