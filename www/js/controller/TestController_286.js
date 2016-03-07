angular.module('TestController_286', ['TestService'])
	.controller('Controller_286', function($scope, $state, TestService){
		console.log('enter controller_286')
		$scope.test = TestService.getTest()
	})
