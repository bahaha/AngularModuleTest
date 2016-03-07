angular.module('TestController_669', ['TestService'])
	.controller('Controller_669', function($scope, $state, TestService){
		console.log('enter controller_669')
		$scope.test = TestService.getTest()
	})
