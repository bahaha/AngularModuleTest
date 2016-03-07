angular.module('TestController_667', ['TestService'])
	.controller('Controller_667', function($scope, $state, TestService){
		console.log('enter controller_667')
		$scope.test = TestService.getTest()
	})
