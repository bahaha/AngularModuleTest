angular.module('TestController_68', ['TestService'])
	.controller('Controller_68', function($scope, $state, TestService){
		console.log('enter controller_68')
		$scope.test = TestService.getTest()
	})
