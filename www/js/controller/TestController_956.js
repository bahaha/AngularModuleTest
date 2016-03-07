angular.module('TestController_956', ['TestService'])
	.controller('Controller_956', function($scope, $state, TestService){
		console.log('enter controller_956')
		$scope.test = TestService.getTest()
	})
