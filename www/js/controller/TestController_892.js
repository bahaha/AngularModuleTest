angular.module('TestController_892', ['TestService'])
	.controller('Controller_892', function($scope, $state, TestService){
		console.log('enter controller_892')
		$scope.test = TestService.getTest()
	})
