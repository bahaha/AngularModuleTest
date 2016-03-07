angular.module('TestController_691', ['TestService'])
	.controller('Controller_691', function($scope, $state, TestService){
		console.log('enter controller_691')
		$scope.test = TestService.getTest()
	})
