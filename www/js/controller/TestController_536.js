angular.module('TestController_536', ['TestService'])
	.controller('Controller_536', function($scope, $state, TestService){
		console.log('enter controller_536')
		$scope.test = TestService.getTest()
	})
