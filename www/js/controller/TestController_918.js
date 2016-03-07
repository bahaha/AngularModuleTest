angular.module('TestController_918', ['TestService'])
	.controller('Controller_918', function($scope, $state, TestService){
		console.log('enter controller_918')
		$scope.test = TestService.getTest()
	})
