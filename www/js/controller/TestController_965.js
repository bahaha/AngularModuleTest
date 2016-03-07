angular.module('TestController_965', ['TestService'])
	.controller('Controller_965', function($scope, $state, TestService){
		console.log('enter controller_965')
		$scope.test = TestService.getTest()
	})
