angular.module('TestController_835', ['TestService'])
	.controller('Controller_835', function($scope, $state, TestService){
		console.log('enter controller_835')
		$scope.test = TestService.getTest()
	})
