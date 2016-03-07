angular.module('TestController_169', ['TestService'])
	.controller('Controller_169', function($scope, $state, TestService){
		console.log('enter controller_169')
		$scope.test = TestService.getTest()
	})
