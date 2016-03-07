angular.module('TestController_782', ['TestService'])
	.controller('Controller_782', function($scope, $state, TestService){
		console.log('enter controller_782')
		$scope.test = TestService.getTest()
	})
