angular.module('TestController_21', ['TestService'])
	.controller('Controller_21', function($scope, $state, TestService){
		console.log('enter controller_21')
		$scope.test = TestService.getTest()
	})
