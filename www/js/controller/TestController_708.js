angular.module('TestController_708', ['TestService'])
	.controller('Controller_708', function($scope, $state, TestService){
		console.log('enter controller_708')
		$scope.test = TestService.getTest()
	})
