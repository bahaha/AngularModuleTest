angular.module('TestController_798', ['TestService'])
	.controller('Controller_798', function($scope, $state, TestService){
		console.log('enter controller_798')
		$scope.test = TestService.getTest()
	})
