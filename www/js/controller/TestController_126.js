angular.module('TestController_126', ['TestService'])
	.controller('Controller_126', function($scope, $state, TestService){
		console.log('enter controller_126')
		$scope.test = TestService.getTest()
	})
