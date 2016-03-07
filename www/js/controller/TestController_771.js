angular.module('TestController_771', ['TestService'])
	.controller('Controller_771', function($scope, $state, TestService){
		console.log('enter controller_771')
		$scope.test = TestService.getTest()
	})
