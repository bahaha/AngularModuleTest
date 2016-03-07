angular.module('TestController_987', ['TestService'])
	.controller('Controller_987', function($scope, $state, TestService){
		console.log('enter controller_987')
		$scope.test = TestService.getTest()
	})
