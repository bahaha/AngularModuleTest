angular.module('TestController_407', ['TestService'])
	.controller('Controller_407', function($scope, $state, TestService){
		console.log('enter controller_407')
		$scope.test = TestService.getTest()
	})
