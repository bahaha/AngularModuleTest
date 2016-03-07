angular.module('TestController_14', ['TestService'])
	.controller('Controller_14', function($scope, $state, TestService){
		console.log('enter controller_14')
		$scope.test = TestService.getTest()
	})
