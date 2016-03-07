angular.module('TestController_185', ['TestService'])
	.controller('Controller_185', function($scope, $state, TestService){
		console.log('enter controller_185')
		$scope.test = TestService.getTest()
	})
