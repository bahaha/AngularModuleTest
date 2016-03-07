angular.module('TestController_638', ['TestService'])
	.controller('Controller_638', function($scope, $state, TestService){
		console.log('enter controller_638')
		$scope.test = TestService.getTest()
	})
