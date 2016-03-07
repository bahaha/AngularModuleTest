angular.module('TestController_717', ['TestService'])
	.controller('Controller_717', function($scope, $state, TestService){
		console.log('enter controller_717')
		$scope.test = TestService.getTest()
	})
