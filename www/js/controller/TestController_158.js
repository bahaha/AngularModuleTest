angular.module('TestController_158', ['TestService'])
	.controller('Controller_158', function($scope, $state, TestService){
		console.log('enter controller_158')
		$scope.test = TestService.getTest()
	})
