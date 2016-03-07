angular.module('TestController_522', ['TestService'])
	.controller('Controller_522', function($scope, $state, TestService){
		console.log('enter controller_522')
		$scope.test = TestService.getTest()
	})
