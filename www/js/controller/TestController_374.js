angular.module('TestController_374', ['TestService'])
	.controller('Controller_374', function($scope, $state, TestService){
		console.log('enter controller_374')
		$scope.test = TestService.getTest()
	})
