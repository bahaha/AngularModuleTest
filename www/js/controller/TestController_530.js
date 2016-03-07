angular.module('TestController_530', ['TestService'])
	.controller('Controller_530', function($scope, $state, TestService){
		console.log('enter controller_530')
		$scope.test = TestService.getTest()
	})
