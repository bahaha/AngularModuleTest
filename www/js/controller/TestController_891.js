angular.module('TestController_891', ['TestService'])
	.controller('Controller_891', function($scope, $state, TestService){
		console.log('enter controller_891')
		$scope.test = TestService.getTest()
	})
