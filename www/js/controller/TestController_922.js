angular.module('TestController_922', ['TestService'])
	.controller('Controller_922', function($scope, $state, TestService){
		console.log('enter controller_922')
		$scope.test = TestService.getTest()
	})
