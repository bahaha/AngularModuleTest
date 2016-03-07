angular.module('TestController_927', ['TestService'])
	.controller('Controller_927', function($scope, $state, TestService){
		console.log('enter controller_927')
		$scope.test = TestService.getTest()
	})
