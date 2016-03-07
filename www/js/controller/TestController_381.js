module.exports= function($scope, $state, TestService){
		console.log('enter controller_381')
		$scope.test = TestService.getTest()
	}
