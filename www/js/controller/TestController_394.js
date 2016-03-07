angular.module('TestController_394', ['TestService'])
	.controller('Controller_394', function($scope, $state, TestService){
		console.log('enter controller_394')
		$scope.test = TestService.getTest()
	})
