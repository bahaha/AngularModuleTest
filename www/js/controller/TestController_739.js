module.exports= function($scope, $state, TestService){
		console.log('enter controller_739')
		$scope.test = TestService.getTest()
	}
