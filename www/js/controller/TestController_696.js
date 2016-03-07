angular.module('TestController_696', ['TestService'])
	.controller('Controller_696', function($scope, $state, TestService){
		console.log('enter controller_696')
		$scope.test = TestService.getTest()
	})
