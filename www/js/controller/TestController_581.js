angular.module('TestController_581', ['TestService'])
	.controller('Controller_581', function($scope, $state, TestService){
		console.log('enter controller_581')
		$scope.test = TestService.getTest()
	})
