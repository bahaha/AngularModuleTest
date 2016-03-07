angular.module('TestController_920', ['TestService'])
	.controller('Controller_920', function($scope, $state, TestService){
		console.log('enter controller_920')
		$scope.test = TestService.getTest()
	})
