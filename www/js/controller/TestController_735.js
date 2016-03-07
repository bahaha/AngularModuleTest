angular.module('TestController_735', ['TestService'])
	.controller('Controller_735', function($scope, $state, TestService){
		console.log('enter controller_735')
		$scope.test = TestService.getTest()
	})
