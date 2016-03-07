angular.module('TestController_906', ['TestService'])
	.controller('Controller_906', function($scope, $state, TestService){
		console.log('enter controller_906')
		$scope.test = TestService.getTest()
	})
