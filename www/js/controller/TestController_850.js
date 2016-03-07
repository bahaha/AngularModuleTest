angular.module('TestController_850', ['TestService'])
	.controller('Controller_850', function($scope, $state, TestService){
		console.log('enter controller_850')
		$scope.test = TestService.getTest()
	})
