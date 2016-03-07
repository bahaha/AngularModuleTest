angular.module('TestController_723', ['TestService'])
	.controller('Controller_723', function($scope, $state, TestService){
		console.log('enter controller_723')
		$scope.test = TestService.getTest()
	})
