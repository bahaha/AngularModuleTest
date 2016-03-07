angular.module('TestController_192', ['TestService'])
	.controller('Controller_192', function($scope, $state, TestService){
		console.log('enter controller_192')
		$scope.test = TestService.getTest()
	})
