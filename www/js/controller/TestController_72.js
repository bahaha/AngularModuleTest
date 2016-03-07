angular.module('TestController_72', ['TestService'])
	.controller('Controller_72', function($scope, $state, TestService){
		console.log('enter controller_72')
		$scope.test = TestService.getTest()
	})
