angular.module('TestController_496', ['TestService'])
	.controller('Controller_496', function($scope, $state, TestService){
		console.log('enter controller_496')
		$scope.test = TestService.getTest()
	})
