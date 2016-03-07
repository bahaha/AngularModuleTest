angular.module('TestController_823', ['TestService'])
	.controller('Controller_823', function($scope, $state, TestService){
		console.log('enter controller_823')
		$scope.test = TestService.getTest()
	})
