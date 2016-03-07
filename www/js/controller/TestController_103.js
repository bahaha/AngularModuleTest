angular.module('TestController_103', ['TestService'])
	.controller('Controller_103', function($scope, $state, TestService){
		console.log('enter controller_103')
		$scope.test = TestService.getTest()
	})
