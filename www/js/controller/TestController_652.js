angular.module('TestController_652', ['TestService'])
	.controller('Controller_652', function($scope, $state, TestService){
		console.log('enter controller_652')
		$scope.test = TestService.getTest()
	})
