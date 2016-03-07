module.exports= function($scope, $state, TestService){
		console.log('enter controller_604')
		$scope.test = TestService.getTest()
	}
