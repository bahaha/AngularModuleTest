angular.module('TestController_19', ['TestService'])
	.controller('Controller_19', function($scope, $state, TestService){
		console.log('enter controller_19')
		$scope.test = TestService.getTest()
	})
