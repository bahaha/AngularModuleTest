angular.module('TestController_91', ['TestService'])
	.controller('Controller_91', function($scope, $state, TestService){
		console.log('enter controller_91')
		$scope.test = TestService.getTest()
	})
