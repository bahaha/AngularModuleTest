angular.module('TestController_162', ['TestService'])
	.controller('Controller_162', function($scope, $state, TestService){
		console.log('enter controller_162')
		$scope.test = TestService.getTest()
	})
