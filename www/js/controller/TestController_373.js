angular.module('TestController_373', ['TestService'])
	.controller('Controller_373', function($scope, $state, TestService){
		console.log('enter controller_373')
		$scope.test = TestService.getTest()
	})
