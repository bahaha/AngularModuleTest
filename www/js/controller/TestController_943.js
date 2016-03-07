angular.module('TestController_943', ['TestService'])
	.controller('Controller_943', function($scope, $state, TestService){
		console.log('enter controller_943')
		$scope.test = TestService.getTest()
	})
