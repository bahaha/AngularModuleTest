angular.module('TestController_363', ['TestService'])
	.controller('Controller_363', function($scope, $state, TestService){
		console.log('enter controller_363')
		$scope.test = TestService.getTest()
	})
