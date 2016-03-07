angular.module('TestController_497', ['TestService'])
	.controller('Controller_497', function($scope, $state, TestService){
		console.log('enter controller_497')
		$scope.test = TestService.getTest()
	})
