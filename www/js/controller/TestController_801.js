angular.module('TestController_801', ['TestService'])
	.controller('Controller_801', function($scope, $state, TestService){
		console.log('enter controller_801')
		$scope.test = TestService.getTest()
	})
