angular.module('TestController_619', ['TestService'])
	.controller('Controller_619', function($scope, $state, TestService){
		console.log('enter controller_619')
		$scope.test = TestService.getTest()
	})
