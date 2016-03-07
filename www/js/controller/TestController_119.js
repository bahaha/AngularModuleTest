angular.module('TestController_119', ['TestService'])
	.controller('Controller_119', function($scope, $state, TestService){
		console.log('enter controller_119')
		$scope.test = TestService.getTest()
	})
