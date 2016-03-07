angular.module('TestController_458', ['TestService'])
	.controller('Controller_458', function($scope, $state, TestService){
		console.log('enter controller_458')
		$scope.test = TestService.getTest()
	})
