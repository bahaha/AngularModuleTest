angular.module('TestController_73', ['TestService'])
	.controller('Controller_73', function($scope, $state, TestService){
		console.log('enter controller_73')
		$scope.test = TestService.getTest()
	})
