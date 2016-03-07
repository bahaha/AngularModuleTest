angular.module('TestController_96', ['TestService'])
	.controller('Controller_96', function($scope, $state, TestService){
		console.log('enter controller_96')
		$scope.test = TestService.getTest()
	})
