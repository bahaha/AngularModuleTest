angular.module('TestController_137', ['TestService'])
	.controller('Controller_137', function($scope, $state, TestService){
		console.log('enter controller_137')
		$scope.test = TestService.getTest()
	})
