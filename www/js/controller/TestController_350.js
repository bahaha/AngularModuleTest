angular.module('TestController_350', ['TestService'])
	.controller('Controller_350', function($scope, $state, TestService){
		console.log('enter controller_350')
		$scope.test = TestService.getTest()
	})
