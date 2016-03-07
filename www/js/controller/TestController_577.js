angular.module('TestController_577', ['TestService'])
	.controller('Controller_577', function($scope, $state, TestService){
		console.log('enter controller_577')
		$scope.test = TestService.getTest()
	})
