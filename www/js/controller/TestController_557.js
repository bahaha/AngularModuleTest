module.exports= function($scope, $state, TestService){
		console.log('enter controller_557')
		$scope.test = TestService.getTest()
	}
