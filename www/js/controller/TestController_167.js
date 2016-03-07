angular.module('TestController_167', ['TestService'])
	.controller('Controller_167', function($scope, $state, TestService){
		console.log('enter controller_167')
		$scope.test = TestService.getTest()
	})
