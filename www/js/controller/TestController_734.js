angular.module('TestController_734', ['TestService'])
	.controller('Controller_734', function($scope, $state, TestService){
		console.log('enter controller_734')
		$scope.test = TestService.getTest()
	})
