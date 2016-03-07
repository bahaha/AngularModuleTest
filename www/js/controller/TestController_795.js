angular.module('TestController_795', ['TestService'])
	.controller('Controller_795', function($scope, $state, TestService){
		console.log('enter controller_795')
		$scope.test = TestService.getTest()
	})
