angular.module('TestController_438', ['TestService'])
	.controller('Controller_438', function($scope, $state, TestService){
		console.log('enter controller_438')
		$scope.test = TestService.getTest()
	})
