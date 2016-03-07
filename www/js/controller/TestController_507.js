angular.module('TestController_507', ['TestService'])
	.controller('Controller_507', function($scope, $state, TestService){
		console.log('enter controller_507')
		$scope.test = TestService.getTest()
	})
