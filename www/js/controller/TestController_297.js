angular.module('TestController_297', ['TestService'])
	.controller('Controller_297', function($scope, $state, TestService){
		console.log('enter controller_297')
		$scope.test = TestService.getTest()
	})
