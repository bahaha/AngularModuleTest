angular.module('TestController_627', ['TestService'])
	.controller('Controller_627', function($scope, $state, TestService){
		console.log('enter controller_627')
		$scope.test = TestService.getTest()
	})
