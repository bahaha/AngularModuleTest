angular.module('TestController_173', ['TestService'])
	.controller('Controller_173', function($scope, $state, TestService){
		console.log('enter controller_173')
		$scope.test = TestService.getTest()
	})
