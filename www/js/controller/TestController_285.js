angular.module('TestController_285', ['TestService'])
	.controller('Controller_285', function($scope, $state, TestService){
		console.log('enter controller_285')
		$scope.test = TestService.getTest()
	})
