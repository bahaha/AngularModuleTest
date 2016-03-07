angular.module('TestController_628', ['TestService'])
	.controller('Controller_628', function($scope, $state, TestService){
		console.log('enter controller_628')
		$scope.test = TestService.getTest()
	})
