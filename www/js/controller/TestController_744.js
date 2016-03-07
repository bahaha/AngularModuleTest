angular.module('TestController_744', ['TestService'])
	.controller('Controller_744', function($scope, $state, TestService){
		console.log('enter controller_744')
		$scope.test = TestService.getTest()
	})
