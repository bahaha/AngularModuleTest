angular.module('TestController_914', ['TestService'])
	.controller('Controller_914', function($scope, $state, TestService){
		console.log('enter controller_914')
		$scope.test = TestService.getTest()
	})
