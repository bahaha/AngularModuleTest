angular.module('TestController_552', ['TestService'])
	.controller('Controller_552', function($scope, $state, TestService){
		console.log('enter controller_552')
		$scope.test = TestService.getTest()
	})
