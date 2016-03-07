angular.module('TestController_194', ['TestService'])
	.controller('Controller_194', function($scope, $state, TestService){
		console.log('enter controller_194')
		$scope.test = TestService.getTest()
	})
