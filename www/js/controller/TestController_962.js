angular.module('TestController_962', ['TestService'])
	.controller('Controller_962', function($scope, $state, TestService){
		console.log('enter controller_962')
		$scope.test = TestService.getTest()
	})
