module.exports= function($scope, $state, TestService){
		console.log('enter controller_367')
		$scope.test = TestService.getTest()
	}
