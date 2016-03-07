module.exports= function($scope, $state, TestService){
		console.log('enter controller_151')
		$scope.test = TestService.getTest()
	}
