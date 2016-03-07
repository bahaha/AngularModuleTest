module.exports= function($scope, $state, TestService){
		console.log('enter controller_898')
		$scope.test = TestService.getTest()
	}
