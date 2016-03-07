angular.module('TestController_810', ['TestService'])
	.controller('Controller_810', function($scope, $state, TestService){
		console.log('enter controller_810')
		$scope.test = TestService.getTest()
	})
