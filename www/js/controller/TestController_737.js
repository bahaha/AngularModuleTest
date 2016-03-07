angular.module('TestController_737', ['TestService'])
	.controller('Controller_737', function($scope, $state, TestService){
		console.log('enter controller_737')
		$scope.test = TestService.getTest()
	})
