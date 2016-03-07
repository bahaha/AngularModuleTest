angular.module('TestController_932', ['TestService'])
	.controller('Controller_932', function($scope, $state, TestService){
		console.log('enter controller_932')
		$scope.test = TestService.getTest()
	})
