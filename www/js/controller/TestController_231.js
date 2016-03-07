angular.module('TestController_231', ['TestService'])
	.controller('Controller_231', function($scope, $state, TestService){
		console.log('enter controller_231')
		$scope.test = TestService.getTest()
	})
