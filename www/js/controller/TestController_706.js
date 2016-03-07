angular.module('TestController_706', ['TestService'])
	.controller('Controller_706', function($scope, $state, TestService){
		console.log('enter controller_706')
		$scope.test = TestService.getTest()
	})
