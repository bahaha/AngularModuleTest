angular.module('TestController_808', ['TestService'])
	.controller('Controller_808', function($scope, $state, TestService){
		console.log('enter controller_808')
		$scope.test = TestService.getTest()
	})
