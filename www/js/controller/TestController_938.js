angular.module('TestController_938', ['TestService'])
	.controller('Controller_938', function($scope, $state, TestService){
		console.log('enter controller_938')
		$scope.test = TestService.getTest()
	})
