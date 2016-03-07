angular.module('TestController_666', ['TestService'])
	.controller('Controller_666', function($scope, $state, TestService){
		console.log('enter controller_666')
		$scope.test = TestService.getTest()
	})
