angular.module('TestController_380', ['TestService'])
	.controller('Controller_380', function($scope, $state, TestService){
		console.log('enter controller_380')
		$scope.test = TestService.getTest()
	})
