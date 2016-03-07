angular.module('TestController_461', ['TestService'])
	.controller('Controller_461', function($scope, $state, TestService){
		console.log('enter controller_461')
		$scope.test = TestService.getTest()
	})
