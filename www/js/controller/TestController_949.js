angular.module('TestController_949', ['TestService'])
	.controller('Controller_949', function($scope, $state, TestService){
		console.log('enter controller_949')
		$scope.test = TestService.getTest()
	})
