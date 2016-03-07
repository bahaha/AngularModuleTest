angular.module('TestController_288', ['TestService'])
	.controller('Controller_288', function($scope, $state, TestService){
		console.log('enter controller_288')
		$scope.test = TestService.getTest()
	})
