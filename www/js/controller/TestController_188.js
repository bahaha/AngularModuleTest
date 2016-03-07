angular.module('TestController_188', ['TestService'])
	.controller('Controller_188', function($scope, $state, TestService){
		console.log('enter controller_188')
		$scope.test = TestService.getTest()
	})
