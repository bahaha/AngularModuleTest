angular.module('TestController_758', ['TestService'])
	.controller('Controller_758', function($scope, $state, TestService){
		console.log('enter controller_758')
		$scope.test = TestService.getTest()
	})
