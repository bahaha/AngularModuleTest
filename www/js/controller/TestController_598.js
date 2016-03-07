angular.module('TestController_598', ['TestService'])
	.controller('Controller_598', function($scope, $state, TestService){
		console.log('enter controller_598')
		$scope.test = TestService.getTest()
	})
