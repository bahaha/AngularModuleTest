angular.module('TestController_617', ['TestService'])
	.controller('Controller_617', function($scope, $state, TestService){
		console.log('enter controller_617')
		$scope.test = TestService.getTest()
	})
