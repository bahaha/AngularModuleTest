angular.module('TestController_726', ['TestService'])
	.controller('Controller_726', function($scope, $state, TestService){
		console.log('enter controller_726')
		$scope.test = TestService.getTest()
	})
