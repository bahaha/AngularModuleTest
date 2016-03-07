angular.module('TestController_608', ['TestService'])
	.controller('Controller_608', function($scope, $state, TestService){
		console.log('enter controller_608')
		$scope.test = TestService.getTest()
	})
