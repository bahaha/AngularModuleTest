angular.module('TestController_935', ['TestService'])
	.controller('Controller_935', function($scope, $state, TestService){
		console.log('enter controller_935')
		$scope.test = TestService.getTest()
	})
