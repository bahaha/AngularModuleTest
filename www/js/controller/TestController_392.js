angular.module('TestController_392', ['TestService'])
	.controller('Controller_392', function($scope, $state, TestService){
		console.log('enter controller_392')
		$scope.test = TestService.getTest()
	})
