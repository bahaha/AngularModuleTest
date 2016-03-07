angular.module('TestController_959', ['TestService'])
	.controller('Controller_959', function($scope, $state, TestService){
		console.log('enter controller_959')
		$scope.test = TestService.getTest()
	})
