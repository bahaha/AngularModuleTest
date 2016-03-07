angular.module('TestController_271', ['TestService'])
	.controller('Controller_271', function($scope, $state, TestService){
		console.log('enter controller_271')
		$scope.test = TestService.getTest()
	})
