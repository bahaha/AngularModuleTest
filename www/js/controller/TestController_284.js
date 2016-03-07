angular.module('TestController_284', ['TestService'])
	.controller('Controller_284', function($scope, $state, TestService){
		console.log('enter controller_284')
		$scope.test = TestService.getTest()
	})
