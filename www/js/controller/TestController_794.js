angular.module('TestController_794', ['TestService'])
	.controller('Controller_794', function($scope, $state, TestService){
		console.log('enter controller_794')
		$scope.test = TestService.getTest()
	})
