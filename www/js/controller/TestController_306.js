angular.module('TestController_306', ['TestService'])
	.controller('Controller_306', function($scope, $state, TestService){
		console.log('enter controller_306')
		$scope.test = TestService.getTest()
	})
