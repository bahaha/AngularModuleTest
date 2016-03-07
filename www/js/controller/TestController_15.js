angular.module('TestController_15', ['TestService'])
	.controller('Controller_15', function($scope, $state, TestService){
		console.log('enter controller_15')
		$scope.test = TestService.getTest()
	})
