angular.module('TestController_868', ['TestService'])
	.controller('Controller_868', function($scope, $state, TestService){
		console.log('enter controller_868')
		$scope.test = TestService.getTest()
	})
