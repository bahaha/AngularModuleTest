angular.module('TestController_989', ['TestService'])
	.controller('Controller_989', function($scope, $state, TestService){
		console.log('enter controller_989')
		$scope.test = TestService.getTest()
	})
