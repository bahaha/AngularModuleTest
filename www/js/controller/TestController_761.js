angular.module('TestController_761', ['TestService'])
	.controller('Controller_761', function($scope, $state, TestService){
		console.log('enter controller_761')
		$scope.test = TestService.getTest()
	})
