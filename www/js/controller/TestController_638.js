module.exports= function($scope, $state, TestService){
		console.log('enter controller_638')
		$scope.test = TestService.getTest()
	}
