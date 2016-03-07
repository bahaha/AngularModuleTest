angular.module('TestController_830', ['TestService'])
	.controller('Controller_830', function($scope, $state, TestService){
		console.log('enter controller_830')
		$scope.test = TestService.getTest()
	})
