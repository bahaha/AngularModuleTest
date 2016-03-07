angular.module('TestController_46', ['TestService'])
	.controller('Controller_46', function($scope, $state, TestService){
		console.log('enter controller_46')
		$scope.test = TestService.getTest()
	})
