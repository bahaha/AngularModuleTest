angular.module('TestController_620', ['TestService'])
	.controller('Controller_620', function($scope, $state, TestService){
		console.log('enter controller_620')
		$scope.test = TestService.getTest()
	})
