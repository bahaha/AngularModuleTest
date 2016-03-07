angular.module('TestController_166', ['TestService'])
	.controller('Controller_166', function($scope, $state, TestService){
		console.log('enter controller_166')
		$scope.test = TestService.getTest()
	})
