angular.module('TestController_907', ['TestService'])
	.controller('Controller_907', function($scope, $state, TestService){
		console.log('enter controller_907')
		$scope.test = TestService.getTest()
	})
