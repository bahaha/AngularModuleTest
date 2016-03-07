angular.module('TestController_217', ['TestService'])
	.controller('Controller_217', function($scope, $state, TestService){
		console.log('enter controller_217')
		$scope.test = TestService.getTest()
	})
