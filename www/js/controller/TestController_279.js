angular.module('TestController_279', ['TestService'])
	.controller('Controller_279', function($scope, $state, TestService){
		console.log('enter controller_279')
		$scope.test = TestService.getTest()
	})
