angular.module('TestController_172', ['TestService'])
	.controller('Controller_172', function($scope, $state, TestService){
		console.log('enter controller_172')
		$scope.test = TestService.getTest()
	})
