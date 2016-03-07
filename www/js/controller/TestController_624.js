angular.module('TestController_624', ['TestService'])
	.controller('Controller_624', function($scope, $state, TestService){
		console.log('enter controller_624')
		$scope.test = TestService.getTest()
	})
