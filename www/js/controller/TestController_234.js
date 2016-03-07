angular.module('TestController_234', ['TestService'])
	.controller('Controller_234', function($scope, $state, TestService){
		console.log('enter controller_234')
		$scope.test = TestService.getTest()
	})
