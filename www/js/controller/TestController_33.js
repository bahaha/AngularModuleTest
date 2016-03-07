angular.module('TestController_33', ['TestService'])
	.controller('Controller_33', function($scope, $state, TestService){
		console.log('enter controller_33')
		$scope.test = TestService.getTest()
	})
