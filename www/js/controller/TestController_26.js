angular.module('TestController_26', ['TestService'])
	.controller('Controller_26', function($scope, $state, TestService){
		console.log('enter controller_26')
		$scope.test = TestService.getTest()
	})
