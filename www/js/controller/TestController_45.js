angular.module('TestController_45', ['TestService'])
	.controller('Controller_45', function($scope, $state, TestService){
		console.log('enter controller_45')
		$scope.test = TestService.getTest()
	})
